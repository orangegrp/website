function asStringArray(val: unknown): string[] {
	if (!Array.isArray(val)) return [];
	return val.filter((x): x is string => typeof x === 'string');
}

export function initBlogToolbar() {
	const root = document.getElementById('blog-filter-root');
	const postsContainer = document.getElementById('blog-posts-container');
	const emptyEl = document.getElementById('blog-filter-empty');
	const searchInput = document.getElementById('blog-search');
	const activeTagsEl = document.getElementById('blog-active-tags');
	const browseButtonsEl = document.getElementById('blog-browse-tag-buttons');
	const expandBtn = document.getElementById('blog-tags-expand');
	const layoutDropdown = document.getElementById('blog-layout-dropdown');
	const layoutTrigger = document.getElementById('blog-layout-trigger');
	const layoutMenu = document.getElementById('blog-layout-menu');
	const layoutValue = document.getElementById('blog-layout-value');

	if (!root || !(emptyEl instanceof HTMLElement)) return;
	if (!(postsContainer instanceof HTMLElement)) return;

	const emptyMsg = emptyEl;
	const postsEl = postsContainer;

	const items = root.querySelectorAll('.blog-post-item');
	const selectedTags = new Set<string>();
	let browseExpanded = false;
	let searchDebounce = 0;

	function getSearchQuery() {
		if (!(searchInput instanceof HTMLInputElement)) return '';
		return searchInput.value.trim().toLowerCase();
	}

	function tagsOrderedFromVisiblePosts() {
		const counts = new Map<string, number>();
		items.forEach((el) => {
			if (!(el instanceof HTMLElement)) return;
			if (el.classList.contains('hidden')) return;
			let rawTags: unknown;
			try {
				rawTags = JSON.parse(el.getAttribute('data-blog-tags') || '[]');
			} catch {
				rawTags = [];
			}
			for (const tag of asStringArray(rawTags)) {
				counts.set(tag, (counts.get(tag) || 0) + 1);
			}
		});
		return [...counts.entries()]
			.sort(
				(a, b) =>
					b[1] - a[1] || String(a[0]).localeCompare(String(b[0])),
			)
			.map(([tag]) => String(tag));
	}

	function applyFilters() {
		const query = getSearchQuery();
		const selected = Array.from(selectedTags);
		let visible = 0;

		items.forEach((el) => {
			if (!(el instanceof HTMLElement)) return;
			const title = (el.getAttribute('data-blog-title') || '').toLowerCase();
			const desc = (el.getAttribute('data-blog-description') || '').toLowerCase();
			let rawTags: unknown;
			try {
				rawTags = JSON.parse(el.getAttribute('data-blog-tags') || '[]');
			} catch {
				rawTags = [];
			}
			const tags = asStringArray(rawTags);
			const tagsLower = tags.map((t) => t.toLowerCase());

			const tagOk =
				selected.length === 0 ||
				selected.some((s) => tags.includes(String(s)));
			const searchOk =
				!query ||
				title.includes(query) ||
				desc.includes(query) ||
				tagsLower.some((t) => t.includes(query));

			const show = tagOk && searchOk;
			el.classList.toggle('hidden', !show);
			if (show) visible++;
		});

		const filtering =
			selected.length > 0 || Boolean(getSearchQuery());
		const showEmpty = filtering && visible === 0;
		emptyMsg.classList.toggle('hidden', !showEmpty);

		renderBrowseTags();
	}

	function renderChips() {
		if (!(activeTagsEl instanceof HTMLElement)) return;
		activeTagsEl.replaceChildren();
		selectedTags.forEach((tag) => {
			const chip = document.createElement('span');
			chip.className =
				'blog-search-chip inline-flex shrink-0 items-center gap-1 rounded-full border border-border/60 bg-background/40 px-2.5 py-1 text-xs tracking-wider text-foreground backdrop-blur-sm';
			const label = document.createElement('span');
			label.textContent = String(tag);
			const remove = document.createElement('button');
			remove.type = 'button';
			remove.className =
				'-mr-0.5 ml-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full text-muted-foreground transition hover:bg-foreground/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40';
			remove.setAttribute('aria-label', `Remove tag ${tag}`);
			remove.innerHTML =
				'<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>';
			remove.addEventListener('click', () => {
				selectedTags.delete(tag);
				renderChips();
				applyFilters();
			});
			chip.append(label, remove);
			activeTagsEl.appendChild(chip);
		});
	}

	function unselectedOrdered() {
		return tagsOrderedFromVisiblePosts().filter((t) => !selectedTags.has(t));
	}

	function renderBrowseTags() {
		if (!(browseButtonsEl instanceof HTMLElement)) return;
		browseButtonsEl.replaceChildren();

		const pool = unselectedOrdered();
		const limit = browseExpanded ? pool.length : 5;
		const showTags = pool.slice(0, Math.max(0, limit));

		showTags.forEach((tag) => {
			const btn = document.createElement('button');
			btn.type = 'button';
			btn.className =
				'glass-button rounded-full px-3 py-1.5 text-xs tracking-wider text-muted-foreground transition hover:text-foreground';
			btn.textContent = tag;
			btn.addEventListener('click', () => {
				selectedTags.add(tag);
				renderChips();
				applyFilters();
			});
			browseButtonsEl.appendChild(btn);
		});

		updateExpandButton();
	}

	function updateExpandButton() {
		if (!(expandBtn instanceof HTMLButtonElement)) return;
		const pool = unselectedOrdered();
		if (pool.length <= 5) {
			browseExpanded = false;
			expandBtn.classList.add('hidden');
			return;
		}
		expandBtn.classList.remove('hidden');
		expandBtn.textContent = browseExpanded ? 'Show less' : 'Show all';
		expandBtn.setAttribute('aria-expanded', browseExpanded ? 'true' : 'false');
	}

	if (expandBtn instanceof HTMLButtonElement) {
		expandBtn.addEventListener('click', () => {
			const pool = unselectedOrdered();
			if (pool.length <= 5) return;
			browseExpanded = !browseExpanded;
			renderBrowseTags();
		});
	}

	function setLayoutMenuOpen(open: boolean) {
		if (!(layoutDropdown instanceof HTMLElement)) return;
		if (!(layoutTrigger instanceof HTMLButtonElement)) return;
		if (open) {
			layoutDropdown.classList.add('blog-layout-is-open');
		} else {
			layoutDropdown.classList.remove('blog-layout-is-open');
		}
		layoutTrigger.setAttribute('aria-expanded', open ? 'true' : 'false');
	}

	function syncLayoutLabel(list: boolean) {
		if (layoutValue) layoutValue.textContent = list ? 'List' : 'Cards';
		if (!(layoutMenu instanceof HTMLElement)) return;
		const opts = layoutMenu.querySelectorAll('.blog-layout-option[data-layout]');
		opts.forEach((opt) => {
			if (!(opt instanceof HTMLButtonElement)) return;
			const isList = opt.getAttribute('data-layout') === 'list';
			opt.setAttribute(
				'aria-selected',
				list === isList ? 'true' : 'false',
			);
		});
	}

	function setViewMode(list: boolean) {
		syncLayoutLabel(list);
		setLayoutMenuOpen(false);

		postsEl.classList.toggle('blog-posts-grid', !list);
		postsEl.classList.toggle('grid', !list);
		postsEl.classList.toggle('gap-4', !list);
		postsEl.classList.toggle('sm:grid-cols-2', !list);
		postsEl.classList.toggle('lg:grid-cols-3', !list);
		postsEl.classList.toggle('blog-posts-list', list);
	}

	if (layoutTrigger instanceof HTMLButtonElement && layoutDropdown instanceof HTMLElement) {
		layoutTrigger.addEventListener('click', () => {
			const open = !layoutDropdown.classList.contains('blog-layout-is-open');
			setLayoutMenuOpen(open);
		});
	}

	if (layoutMenu instanceof HTMLElement) {
		layoutMenu.querySelectorAll('.blog-layout-option[data-layout]').forEach((opt) => {
			opt.addEventListener('click', (e) => {
				e.stopPropagation();
				const v = opt.getAttribute('data-layout');
				setViewMode(v === 'list');
			});
		});
	}

	document.addEventListener('click', (e) => {
		if (!(layoutDropdown instanceof HTMLElement)) return;
		if (!(e.target instanceof Node)) return;
		if (layoutDropdown.contains(e.target)) return;
		setLayoutMenuOpen(false);
	});

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') setLayoutMenuOpen(false);
	});

	if (searchInput instanceof HTMLInputElement) {
		searchInput.addEventListener('input', () => {
			window.clearTimeout(searchDebounce);
			searchDebounce = window.setTimeout(applyFilters, 180);
		});
	}

	setViewMode(false);
	applyFilters();
}
