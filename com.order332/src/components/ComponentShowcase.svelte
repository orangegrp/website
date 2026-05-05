<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";

	import * as Accordion from "$lib/components/ui/accordion/index.js";
	import * as Alert from "$lib/components/ui/alert/index.js";
	import * as AlertDialog from "$lib/components/ui/alert-dialog/index.js";
	import * as AspectRatio from "$lib/components/ui/aspect-ratio/index.js";
	import * as Avatar from "$lib/components/ui/avatar/index.js";
	import { Badge } from "$lib/components/ui/badge/index.js";
	import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
	import * as ButtonGroup from "$lib/components/ui/button-group/index.js";
	import * as Calendar from "$lib/components/ui/calendar/index.js";
	import * as Card from "$lib/components/ui/card/index.js";
	import * as Carousel from "$lib/components/ui/carousel/index.js";
	import { Checkbox } from "$lib/components/ui/checkbox/index.js";
	import * as Collapsible from "$lib/components/ui/collapsible/index.js";
	import * as Command from "$lib/components/ui/command/index.js";
	import * as ContextMenu from "$lib/components/ui/context-menu/index.js";
	import * as Dialog from "$lib/components/ui/dialog/index.js";
	import * as Drawer from "$lib/components/ui/drawer/index.js";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import * as Empty from "$lib/components/ui/empty/index.js";
	import * as HoverCard from "$lib/components/ui/hover-card/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import * as InputGroup from "$lib/components/ui/input-group/index.js";
	import * as InputOTP from "$lib/components/ui/input-otp/index.js";
	import { Kbd } from "$lib/components/ui/kbd/index.js";
	import { Label } from "$lib/components/ui/label/index.js";
	import * as Menubar from "$lib/components/ui/menubar/index.js";
	import * as NativeSelect from "$lib/components/ui/native-select/index.js";
	import * as Pagination from "$lib/components/ui/pagination/index.js";
	import * as Popover from "$lib/components/ui/popover/index.js";
	import { Progress } from "$lib/components/ui/progress/index.js";
	import * as RadioGroup from "$lib/components/ui/radio-group/index.js";
	import * as RangeCalendar from "$lib/components/ui/range-calendar/index.js";
	import * as Resizable from "$lib/components/ui/resizable/index.js";
	import * as ScrollArea from "$lib/components/ui/scroll-area/index.js";
	import { Separator } from "$lib/components/ui/separator/index.js";
	import * as Select from "$lib/components/ui/select/index.js";
	import * as Sheet from "$lib/components/ui/sheet/index.js";
	import { Skeleton } from "$lib/components/ui/skeleton/index.js";
	import { Slider } from "$lib/components/ui/slider/index.js";
	import { Spinner } from "$lib/components/ui/spinner/index.js";
	import { Switch } from "$lib/components/ui/switch/index.js";
	import * as Table from "$lib/components/ui/table/index.js";
	import * as Tabs from "$lib/components/ui/tabs/index.js";
	import { Textarea } from "$lib/components/ui/textarea/index.js";
	import { Toggle } from "$lib/components/ui/toggle/index.js";
	import * as ToggleGroup from "$lib/components/ui/toggle-group/index.js";
	import * as Tooltip from "$lib/components/ui/tooltip/index.js";
	import { Toaster } from "$lib/components/ui/sonner/index.js";
	import { toast } from "svelte-sonner";

	let sliderValue = $state([40]);
	let progressValue = $state(65);
	let switchChecked = $state(true);
	let checkboxChecked = $state(true);
	let radioValue = $state("opt-1");
	let otpValue = $state("");
	let collapsibleOpen = $state(false);

	let showBookmarks = $state(false);
	let showFullURLs = $state(true);
	let ctxPerson = $state("pedro");
</script>

<Toaster />

<section class="showcase relative overflow-clip px-4 py-12 sm:py-24">
	<div
		class="dot-pattern pointer-events-none absolute inset-0"
		aria-hidden="true"
	></div>

	<div class="relative z-10 mx-auto max-w-6xl">
		<!-- Heading -->
		<div class="mb-8 flex flex-col items-center gap-3 text-center sm:mb-16">
			<p class="text-xs tracking-[0.3em] text-muted-foreground uppercase">
				Design System
			</p>
			<h2 class="text-3xl tracking-widest text-foreground sm:text-4xl">
				Components_
			</h2>
			<p class="max-w-sm text-sm leading-relaxed text-muted-foreground">
				Every component styled with the liquid glass system. Hover,
				focus, and interact.
			</p>
		</div>

		<!-- ════════════════════════════════════════════════════════ -->
		<!--  DISPLAY                                                 -->
		<!-- ════════════════════════════════════════════════════════ -->
		<div class="section-label">Display</div>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
			<!-- Badge + Kbd -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Badge · Kbd</p>
				<div class="flex flex-wrap gap-2">
					<Badge variant="default">Default</Badge>
					<Badge variant="secondary">Secondary</Badge>
					<Badge variant="destructive">Error</Badge>
					<Badge variant="outline">Outline</Badge>
				</div>
				<div class="flex flex-wrap gap-2 items-center">
					<Kbd>⌘</Kbd><Kbd>⇧</Kbd><Kbd>K</Kbd>
					<span class="text-xs text-muted-foreground"
						>keyboard shortcuts</span
					>
				</div>
			</div>

			<!-- Avatar + Skeleton -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Avatar · Skeleton</p>
				<div class="flex items-center gap-3">
					<Avatar.Root class="h-12 w-12">
						<Avatar.Image
							src="https://github.com/shadcn.png?size=100"
							alt="shadcn"
						/>
						<Avatar.Fallback>SC</Avatar.Fallback>
					</Avatar.Root>
					<Avatar.Root class="h-10 w-10"
						><Avatar.Fallback>JD</Avatar.Fallback></Avatar.Root
					>
					<Avatar.Root class="h-8 w-8"
						><Avatar.Fallback>AB</Avatar.Fallback></Avatar.Root
					>
				</div>
				<div class="flex flex-col gap-2">
					<Skeleton class="h-4 w-full rounded" />
					<Skeleton class="h-4 w-3/4 rounded" />
					<Skeleton class="h-4 w-1/2 rounded" />
				</div>
			</div>

			<!-- Spinner + Separator + Aspect Ratio -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Spinner · Separator · Aspect Ratio</p>
				<div class="flex items-end gap-5">
					<Spinner size="xs" />
					<Spinner size="sm" />
					<Spinner size="md" />
					<Spinner size="lg" />
					<Spinner size="xl" />
				</div>
				<Separator />
				<AspectRatio.Root
					ratio={16 / 9}
					class="overflow-hidden rounded-lg"
				>
					<div
						class="flex h-full w-full items-center justify-center"
						style="background: radial-gradient(circle, oklch(0.25 0 0), oklch(0.08 0 0));"
					>
						<span
							class="text-xs tracking-widest text-muted-foreground"
							>16 : 9</span
						>
					</div>
				</AspectRatio.Root>
			</div>

			<!-- Card -->
			<div class="glass-card flex flex-col gap-4 p-6 lg:col-span-3">
				<p class="card-label">Card</p>
				<div class="grid gap-4 sm:grid-cols-3">
					<Card.Root>
						<Card.Header>
							<Card.Title class="text-sm tracking-wide"
								>Glass Card</Card.Title
							>
							<Card.Description class="text-xs"
								>A frosted surface with directional light.</Card.Description
							>
						</Card.Header>
						<Card.Content class="text-xs text-muted-foreground">
							Backdrop blur, OKLch border gradients, and inset
							highlight shadows.
						</Card.Content>
						<Card.Footer>
							<Button size="sm" variant="glass">Explore</Button>
						</Card.Footer>
					</Card.Root>
					<Card.Root>
						<Card.Header>
							<Card.Title class="text-sm tracking-wide"
								>Nested Glass</Card.Title
							>
							<Card.Description class="text-xs"
								>Cards inside cards, layered depth.</Card.Description
							>
						</Card.Header>
						<Card.Content class="text-xs text-muted-foreground">
							Each surface blurs through to the one behind it,
							creating true depth.
						</Card.Content>
						<Card.Footer>
							<Button size="sm" variant="secondary"
								>Learn more</Button
							>
						</Card.Footer>
					</Card.Root>
					<Card.Root>
						<Card.Header>
							<Card.Title class="text-sm tracking-wide"
								>Portable CSS</Card.Title
							>
							<Card.Description class="text-xs"
								>One file, any project.</Card.Description
							>
						</Card.Header>
						<Card.Content class="text-xs text-muted-foreground">
							Drop <code class="font-mono">glass-system.css</code>
							into any project and get the full system.
						</Card.Content>
						<Card.Footer>
							<Button size="sm" variant="default">Import</Button>
						</Card.Footer>
					</Card.Root>
				</div>
			</div>
		</div>

		<!-- ════════════════════════════════════════════════════════ -->
		<!--  ACTIONS                                                 -->
		<!-- ════════════════════════════════════════════════════════ -->
		<div class="section-label">Actions</div>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
			<!-- Button -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Button</p>
				<div class="flex flex-wrap gap-2">
					<Button variant="default" size="sm">Default</Button>
					<Button variant="secondary" size="sm">Secondary</Button>
					<Button variant="glass" size="sm">Glass</Button>
					<Button variant="ghost" size="sm">Ghost</Button>
					<Button variant="destructive" size="sm">Destructive</Button>
				</div>
				<div class="flex flex-wrap gap-2">
					<Button variant="default" size="sm" disabled
						>Disabled</Button
					>
					<Button variant="glass" size="icon" class="h-8 w-8 text-xs"
						>⌘</Button
					>
					<Button variant="ghost" size="lg">Large</Button>
				</div>
			</div>

			<!-- Button Group -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Button Group</p>
				<ButtonGroup.Root>
					<Button variant="secondary" size="sm">Cut</Button>
					<ButtonGroup.Separator />
					<Button variant="secondary" size="sm">Copy</Button>
					<ButtonGroup.Separator />
					<Button variant="secondary" size="sm">Paste</Button>
				</ButtonGroup.Root>
				<ButtonGroup.Root>
					<Button variant="glass" size="sm">Save</Button>
					<ButtonGroup.Separator />
					<Button variant="glass" size="sm">Save As…</Button>
					<ButtonGroup.Separator />
					<Button variant="destructive" size="sm">Discard</Button>
				</ButtonGroup.Root>
			</div>

			<!-- Toggle + ToggleGroup -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Toggle · Toggle Group</p>
				<div class="flex gap-2">
					<Toggle aria-label="Bold" class="font-bold">B</Toggle>
					<Toggle aria-label="Italic" class="italic">I</Toggle>
					<Toggle aria-label="Underline" class="underline">U</Toggle>
					<Toggle aria-label="Strike" class="line-through">S</Toggle>
				</div>
				<Separator />
				<ToggleGroup.Root type="single" value="center">
					<ToggleGroup.Item value="left" class="flex-1 text-xs"
						>Left</ToggleGroup.Item
					>
					<ToggleGroup.Item value="center" class="flex-1 text-xs"
						>Center</ToggleGroup.Item
					>
					<ToggleGroup.Item value="right" class="flex-1 text-xs"
						>Right</ToggleGroup.Item
					>
				</ToggleGroup.Root>
			</div>
		</div>

		<!-- ════════════════════════════════════════════════════════ -->
		<!--  FORM CONTROLS                                           -->
		<!-- ════════════════════════════════════════════════════════ -->
		<div class="section-label">Form Controls</div>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
			<!-- Input + Textarea -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Input · Textarea</p>
				<div class="flex flex-col gap-2">
					<Label for="s-email" class="text-xs">Email address</Label>
					<Input
						id="s-email"
						type="email"
						placeholder="you@332.com"
					/>
				</div>
				<div class="flex flex-col gap-2">
					<Label for="s-msg" class="text-xs">Message</Label>
					<Textarea
						id="s-msg"
						placeholder="Write something..."
						class="min-h-[80px] resize-none"
					/>
				</div>
			</div>

			<!-- Input Group + Input OTP -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Input Group · OTP</p>
				<div class="flex flex-col gap-2">
					<Label class="text-xs">URL</Label>
					<InputGroup.Root>
						<InputGroup.Addon
							><InputGroup.Text class="text-xs"
								>https://</InputGroup.Text
							></InputGroup.Addon
						>
						<InputGroup.Input placeholder="your-domain.com" />
					</InputGroup.Root>
				</div>
				<div class="flex flex-col gap-2">
					<Label class="text-xs">Verification code</Label>
					<InputOTP.Root maxlength={6} bind:value={otpValue} aria-label="Verification code">
						{#snippet children({ cells })}
							<InputOTP.Group>
								{#each cells.slice(0, 3) as cell}
									<InputOTP.Slot {cell} />
								{/each}
							</InputOTP.Group>
							<InputOTP.Separator />
							<InputOTP.Group>
								{#each cells.slice(3) as cell}
									<InputOTP.Slot {cell} />
								{/each}
							</InputOTP.Group>
						{/snippet}
					</InputOTP.Root>
				</div>
			</div>

			<!-- Checkbox + Switch -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Checkbox · Switch</p>
				<div class="flex flex-col gap-3">
					<div class="flex items-center gap-3">
						<Checkbox id="cb1" bind:checked={checkboxChecked} />
						<Label for="cb1" class="cursor-pointer text-sm"
							>Enable notifications</Label
						>
					</div>
					<div class="flex items-center gap-3">
						<Checkbox id="cb2" />
						<Label for="cb2" class="cursor-pointer text-sm"
							>Remember me</Label
						>
					</div>
					<div class="flex items-center gap-3">
						<Checkbox id="cb3" disabled />
						<Label
							for="cb3"
							class="cursor-not-allowed text-sm opacity-50"
							>Disabled</Label
						>
					</div>
				</div>
				<Separator />
				<div class="flex flex-col gap-3">
					<div class="flex items-center justify-between">
						<Label for="sw1" class="text-sm">Dark mode</Label>
						<Switch id="sw1" bind:checked={switchChecked} />
					</div>
					<div class="flex items-center justify-between">
						<Label for="sw2" class="text-sm">Notifications</Label>
						<Switch id="sw2" />
					</div>
				</div>
			</div>

			<!-- Radio Group -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Radio Group</p>
				<RadioGroup.Root
					bind:value={radioValue}
					class="flex flex-col gap-3"
				>
					<div class="flex items-center gap-3">
						<RadioGroup.Item value="opt-1" id="r1" />
						<Label for="r1" class="cursor-pointer text-sm"
							>Free tier</Label
						>
					</div>
					<div class="flex items-center gap-3">
						<RadioGroup.Item value="opt-2" id="r2" />
						<Label for="r2" class="cursor-pointer text-sm"
							>Pro — $12/mo</Label
						>
					</div>
					<div class="flex items-center gap-3">
						<RadioGroup.Item value="opt-3" id="r3" />
						<Label for="r3" class="cursor-pointer text-sm"
							>Enterprise</Label
						>
					</div>
				</RadioGroup.Root>
				<p class="text-xs text-muted-foreground">
					Selected: {radioValue}
				</p>
			</div>

			<!-- Native Select + Select -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Native Select · Select</p>
				<div class="flex flex-col gap-2">
					<Label class="text-xs">Native</Label>
					<NativeSelect.Root
						class="w-full rounded-md border border-white/10 bg-white/3 px-3 py-2 text-sm backdrop-blur-sm"
						aria-label="Pick a colour"
					>
						<NativeSelect.Option value=""
							>Pick a colour…</NativeSelect.Option
						>
						<NativeSelect.Option value="red"
							>Red</NativeSelect.Option
						>
						<NativeSelect.Option value="green"
							>Green</NativeSelect.Option
						>
						<NativeSelect.Option value="blue"
							>Blue</NativeSelect.Option
						>
					</NativeSelect.Root>
				</div>
				<div class="flex flex-col gap-2">
					<Label class="text-xs">Custom Select</Label>
					<Select.Root type="single">
						<Select.Trigger class="w-full">
							<span>Select a framework…</span>
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="svelte">SvelteKit</Select.Item>
							<Select.Item value="next">Next.js</Select.Item>
							<Select.Item value="astro">Astro</Select.Item>
							<Select.Item value="nuxt">Nuxt</Select.Item>
						</Select.Content>
					</Select.Root>
				</div>
			</div>

			<!-- Slider + Progress -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Slider · Progress</p>
				<div class="flex flex-col gap-2">
					<div
						class="flex justify-between text-xs text-muted-foreground"
					>
						<span>Volume</span><span>{sliderValue[0]}%</span>
					</div>
					<Slider
						type="multiple"
						bind:value={sliderValue}
						max={100}
						step={1}
						class="w-full"
						aria-label="Volume"
					/>
				</div>
				<Separator />
				<div class="flex flex-col gap-2">
					<div
						class="flex justify-between text-xs text-muted-foreground"
					>
						<span>Upload</span><span>{progressValue}%</span>
					</div>
					<Progress value={progressValue} class="h-2" aria-label="Upload progress" />
				</div>
				<div class="flex flex-col gap-1.5">
					<Progress value={25} class="h-1.5" aria-label="Storage 25%" />
					<Progress value={60} class="h-1.5" aria-label="Battery 60%" />
					<Progress value={100} class="h-1.5" aria-label="Download complete" />
				</div>
			</div>
		</div>

		<!-- ════════════════════════════════════════════════════════ -->
		<!--  NAVIGATION                                              -->
		<!-- ════════════════════════════════════════════════════════ -->
		<div class="section-label">Navigation</div>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
			<!-- Tabs -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Tabs</p>
				<Tabs.Root value="account">
					<Tabs.List class="w-full">
						<Tabs.Trigger value="account" class="flex-1"
							>Account</Tabs.Trigger
						>
						<Tabs.Trigger value="password" class="flex-1"
							>Password</Tabs.Trigger
						>
						<Tabs.Trigger value="team" class="flex-1"
							>Team</Tabs.Trigger
						>
					</Tabs.List>
					<Tabs.Content
						value="account"
						class="pt-3 text-sm text-muted-foreground"
						>Manage your account settings.</Tabs.Content
					>
					<Tabs.Content
						value="password"
						class="pt-3 text-sm text-muted-foreground"
						>Change your password.</Tabs.Content
					>
					<Tabs.Content
						value="team"
						class="pt-3 text-sm text-muted-foreground"
						>Manage team members.</Tabs.Content
					>
				</Tabs.Root>
			</div>

			<!-- Breadcrumb + Pagination -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Breadcrumb · Pagination</p>
				<Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item
							><Breadcrumb.Link href="/">Home</Breadcrumb.Link
							></Breadcrumb.Item
						>
						<Breadcrumb.Separator />
						<Breadcrumb.Item
							><Breadcrumb.Link href="/ui">UI</Breadcrumb.Link
							></Breadcrumb.Item
						>
						<Breadcrumb.Separator />
						<Breadcrumb.Item
							><Breadcrumb.Page>Glass</Breadcrumb.Page
							></Breadcrumb.Item
						>
					</Breadcrumb.List>
				</Breadcrumb.Root>
				<Separator />
				<Pagination.Root count={50} perPage={10} page={3}>
					{#snippet children({ pages, currentPage })}
						<Pagination.Content>
							<Pagination.Item
								><Pagination.Previous /></Pagination.Item
							>
							{#each pages as page (page.key)}
								<Pagination.Item>
									{#if page.type === "ellipsis"}
										<Pagination.Ellipsis />
									{:else}
										<Pagination.Link
											{page}
											isActive={currentPage ===
												page.value}
										>
											{page.value}
										</Pagination.Link>
									{/if}
								</Pagination.Item>
							{/each}
							<Pagination.Item
								><Pagination.Next /></Pagination.Item
							>
						</Pagination.Content>
					{/snippet}
				</Pagination.Root>
			</div>

			<!-- Menubar -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Menubar</p>
				<Menubar.Root>
					<Menubar.Menu>
						<Menubar.Trigger>File</Menubar.Trigger>
						<Menubar.Content>
							<Menubar.Item
								>New <Menubar.Shortcut>⌘N</Menubar.Shortcut
								></Menubar.Item
							>
							<Menubar.Item
								>Open <Menubar.Shortcut>⌘O</Menubar.Shortcut
								></Menubar.Item
							>
							<Menubar.Separator />
							<Menubar.Item
								>Save <Menubar.Shortcut>⌘S</Menubar.Shortcut
								></Menubar.Item
							>
						</Menubar.Content>
					</Menubar.Menu>
					<Menubar.Menu>
						<Menubar.Trigger>Edit</Menubar.Trigger>
						<Menubar.Content>
							<Menubar.Item
								>Undo <Menubar.Shortcut>⌘Z</Menubar.Shortcut
								></Menubar.Item
							>
							<Menubar.Item
								>Redo <Menubar.Shortcut>⇧⌘Z</Menubar.Shortcut
								></Menubar.Item
							>
							<Menubar.Separator />
							<Menubar.Item>Cut</Menubar.Item>
							<Menubar.Item>Copy</Menubar.Item>
							<Menubar.Item>Paste</Menubar.Item>
						</Menubar.Content>
					</Menubar.Menu>
					<Menubar.Menu>
						<Menubar.Trigger>View</Menubar.Trigger>
						<Menubar.Content>
							<Menubar.Item>Zoom In</Menubar.Item>
							<Menubar.Item>Zoom Out</Menubar.Item>
							<Menubar.Separator />
							<Menubar.Item>Full Screen</Menubar.Item>
						</Menubar.Content>
					</Menubar.Menu>
				</Menubar.Root>
				<p class="text-xs text-muted-foreground">
					Click a menu to open. Glass backdrop applies to all
					dropdowns.
				</p>
			</div>
		</div>

		<!-- ════════════════════════════════════════════════════════ -->
		<!--  OVERLAYS & PANELS                                       -->
		<!-- ════════════════════════════════════════════════════════ -->
		<div class="section-label">Overlays & Panels</div>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
			<!-- Dialog + Tooltip -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Dialog · Tooltip</p>
				<div class="flex flex-wrap gap-2">
					<Dialog.Root>
						<Dialog.Trigger>
							<Button variant="glass" size="sm"
								>Open Dialog</Button
							>
						</Dialog.Trigger>
						<Dialog.Content class="max-w-md">
							<Dialog.Header>
								<Dialog.Title class="tracking-widest"
									>Glass Dialog</Dialog.Title
								>
								<Dialog.Description
									class="text-sm text-muted-foreground"
								>
									Backdrop blur + inset highlight + deep
									shadow.
								</Dialog.Description>
							</Dialog.Header>
							<div class="py-2">
								<Input placeholder="Type something…" />
							</div>
							<Dialog.Footer>
								<Dialog.Close
									><Button variant="ghost" size="sm"
										>Cancel</Button
									></Dialog.Close
								>
								<Button variant="default" size="sm"
									>Confirm</Button
								>
							</Dialog.Footer>
						</Dialog.Content>
					</Dialog.Root>

					<Tooltip.Provider>
						<Tooltip.Root>
							<Tooltip.Trigger
								><Button variant="ghost" size="sm"
									>Hover me</Button
								></Tooltip.Trigger
							>
							<Tooltip.Content
								><p class="text-xs">
									Glass tooltip ✦
								</p></Tooltip.Content
							>
						</Tooltip.Root>
					</Tooltip.Provider>
				</div>
			</div>

			<!-- Popover + Hover Card -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Popover · Hover Card</p>
				<div class="flex flex-wrap gap-2">
					<Popover.Root>
						<Popover.Trigger>
							<Button variant="glass" size="sm"
								>Open Popover</Button
							>
						</Popover.Trigger>
						<Popover.Content class="w-56">
							<p class="text-sm font-medium">Glass Popover</p>
							<p class="mt-1 text-xs text-muted-foreground">
								Floating panel with backdrop blur.
							</p>
							<div class="mt-3">
								<Input
									placeholder="Search…"
									class="h-7 text-xs"
								/>
							</div>
						</Popover.Content>
					</Popover.Root>

					<HoverCard.Root>
						<HoverCard.Trigger>
							<Button variant="ghost" size="sm">@order332</Button>
						</HoverCard.Trigger>
						<HoverCard.Content class="w-56">
							<div class="flex gap-3">
								<Avatar.Root class="h-9 w-9"
									><Avatar.Fallback>33</Avatar.Fallback
									></Avatar.Root
								>
								<div>
									<p class="text-sm font-medium">@order332</p>
									<p class="text-xs text-muted-foreground">
										Building the future.
									</p>
								</div>
							</div>
						</HoverCard.Content>
					</HoverCard.Root>
				</div>
				<p class="text-xs text-muted-foreground">
					Hover the second button to reveal the card.
				</p>
			</div>

			<!-- Alert Dialog + Sheet + Drawer -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Alert Dialog · Sheet · Drawer</p>
				<div class="flex flex-wrap gap-2">
					<AlertDialog.Root>
						<AlertDialog.Trigger>
							<Button variant="destructive" size="sm"
								>Delete</Button
							>
						</AlertDialog.Trigger>
						<AlertDialog.Content>
							<AlertDialog.Header>
								<AlertDialog.Title
									>Are you sure?</AlertDialog.Title
								>
								<AlertDialog.Description
									class="text-sm text-muted-foreground"
								>
									This action cannot be undone.
								</AlertDialog.Description>
							</AlertDialog.Header>
							<AlertDialog.Footer>
								<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
								<AlertDialog.Action>Continue</AlertDialog.Action
								>
							</AlertDialog.Footer>
						</AlertDialog.Content>
					</AlertDialog.Root>

					<Sheet.Root>
						<Sheet.Trigger>
							<Button variant="glass" size="sm">Sheet →</Button>
						</Sheet.Trigger>
						<Sheet.Content side="right" class="w-72">
							<Sheet.Header>
								<Sheet.Title class="tracking-widest"
									>Sheet Panel</Sheet.Title
								>
								<Sheet.Description
									class="text-sm text-muted-foreground"
									>A side panel with glass styling.</Sheet.Description
								>
							</Sheet.Header>
							<div class="py-4">
								<Input placeholder="Search…" />
							</div>
							<Sheet.Footer>
								<Sheet.Close
									><Button variant="ghost" size="sm"
										>Close</Button
									></Sheet.Close
								>
							</Sheet.Footer>
						</Sheet.Content>
					</Sheet.Root>

					<Drawer.Root>
						<Drawer.Trigger>
							<Button variant="secondary" size="sm"
								>Drawer ↓</Button
							>
						</Drawer.Trigger>
						<Drawer.Portal>
							<Drawer.Overlay />
							<Drawer.Content>
								<Drawer.Header>
									<Drawer.Title class="tracking-widest"
										>Drawer</Drawer.Title
									>
									<Drawer.Description
										class="text-sm text-muted-foreground"
										>A bottom glass drawer.</Drawer.Description
									>
								</Drawer.Header>
								<div class="p-4 pb-0">
									<p class="text-sm text-muted-foreground">
										Drag down to dismiss.
									</p>
								</div>
								<Drawer.Footer>
									<Drawer.Close
										><Button variant="ghost" size="sm"
											>Close</Button
										></Drawer.Close
									>
								</Drawer.Footer>
							</Drawer.Content>
						</Drawer.Portal>
					</Drawer.Root>
				</div>
			</div>

			<!-- Dropdown Menu + Context Menu -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Dropdown · Context Menu</p>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						<Button
							variant="ghost"
							size="sm"
							class="w-full justify-between"
						>
							Actions <span class="text-muted-foreground">↓</span>
						</Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="w-48">
						<DropdownMenu.Item>Profile</DropdownMenu.Item>
						<DropdownMenu.Item>Settings</DropdownMenu.Item>
						<DropdownMenu.Sub>
							<DropdownMenu.SubTrigger
								>More</DropdownMenu.SubTrigger
							>
							<DropdownMenu.SubContent>
								<DropdownMenu.Item>Invite</DropdownMenu.Item>
								<DropdownMenu.Item>Export</DropdownMenu.Item>
							</DropdownMenu.SubContent>
						</DropdownMenu.Sub>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>Sign out</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>

				<ContextMenu.Root>
					<ContextMenu.Trigger
						class="flex h-20 w-full items-center justify-center rounded-lg border border-dashed border-white/10 text-xs text-muted-foreground"
					>
						Right-click here
					</ContextMenu.Trigger>
					<ContextMenu.Content class="w-48">
						<ContextMenu.Item inset
							>Back <ContextMenu.Shortcut>⌘[</ContextMenu.Shortcut
							></ContextMenu.Item
						>
						<ContextMenu.Item inset disabled
							>Forward <ContextMenu.Shortcut
								>⌘]</ContextMenu.Shortcut
							></ContextMenu.Item
						>
						<ContextMenu.Item inset
							>Reload <ContextMenu.Shortcut
								>⌘R</ContextMenu.Shortcut
							></ContextMenu.Item
						>
						<ContextMenu.Separator />
						<ContextMenu.CheckboxItem bind:checked={showBookmarks}
							>Show Bookmarks</ContextMenu.CheckboxItem
						>
						<ContextMenu.CheckboxItem bind:checked={showFullURLs}
							>Show Full URLs</ContextMenu.CheckboxItem
						>
						<ContextMenu.Separator />
						<ContextMenu.RadioGroup bind:value={ctxPerson}>
							<ContextMenu.Group>
								<ContextMenu.GroupHeading inset
									>People</ContextMenu.GroupHeading
								>
								<ContextMenu.RadioItem value="pedro"
									>Pedro Duarte</ContextMenu.RadioItem
								>
								<ContextMenu.RadioItem value="colm"
									>Colm Tuite</ContextMenu.RadioItem
								>
							</ContextMenu.Group>
						</ContextMenu.RadioGroup>
					</ContextMenu.Content>
				</ContextMenu.Root>
			</div>
		</div>

		<!-- ════════════════════════════════════════════════════════ -->
		<!--  FEEDBACK                                                -->
		<!-- ════════════════════════════════════════════════════════ -->
		<div class="section-label">Feedback</div>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
			<!-- Alert -->
			<div class="glass-card flex flex-col gap-4 p-6 lg:col-span-2">
				<p class="card-label">Alert</p>
				<Alert.Root>
					<Alert.Title class="text-sm">Heads up</Alert.Title>
					<Alert.Description class="text-xs text-muted-foreground"
						>You can add components using the CLI.</Alert.Description
					>
				</Alert.Root>
				<Alert.Root variant="destructive">
					<Alert.Title class="text-sm">Error</Alert.Title>
					<Alert.Description class="text-xs"
						>Your session has expired. Please log in again.</Alert.Description
					>
				</Alert.Root>
			</div>

			<!-- Sonner -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Sonner (Toast)</p>
				<div class="flex flex-col gap-2">
					<Button
						variant="glass"
						size="sm"
						onclick={() => toast("Event has been created")}
						>Default toast</Button
					>
					<Button
						variant="ghost"
						size="sm"
						onclick={() =>
							toast.success("Changes saved successfully")}
						>Success</Button
					>
					<Button
						variant="ghost"
						size="sm"
						onclick={() => toast.error("Something went wrong")}
						>Error</Button
					>
					<Button
						variant="ghost"
						size="sm"
						onclick={() => toast.info("New update available")}
						>Info</Button
					>
				</div>
			</div>
		</div>

		<!-- ════════════════════════════════════════════════════════ -->
		<!--  CONTENT                                                 -->
		<!-- ════════════════════════════════════════════════════════ -->
		<div class="section-label">Content</div>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
			<!-- Accordion -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Accordion</p>
				<Accordion.Root type="single">
					<Accordion.Item value="q1">
						<Accordion.Trigger class="text-sm"
							>What is 332?</Accordion.Trigger
						>
						<Accordion.Content
							class="text-xs text-muted-foreground"
						>
							Invite-only Discord server with a blog bolted on—the
							community predates the slick glass cards.
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="q2">
						<Accordion.Trigger class="text-sm"
							>What is liquid glass?</Accordion.Trigger
						>
						<Accordion.Content
							class="text-xs text-muted-foreground"
						>
							A design system using backdrop blur, OKLch colors,
							and directional light.
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="q3">
						<Accordion.Trigger class="text-sm"
							>Is it open source?</Accordion.Trigger
						>
						<Accordion.Content
							class="text-xs text-muted-foreground"
						>
							Yes. Drop <code class="font-mono"
								>glass-system.css</code
							> into any project.
						</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>
			</div>

			<!-- Collapsible + Scroll Area -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Collapsible · Scroll Area</p>
				<Collapsible.Root bind:open={collapsibleOpen}>
					<div class="flex items-center justify-between">
						<p class="text-sm">Repositories</p>
						<Collapsible.Trigger>
							<Button variant="ghost" size="sm" class="text-xs">
								{collapsibleOpen ? "Hide" : "Show all"}
							</Button>
						</Collapsible.Trigger>
					</div>
					<div
						class="glass-card mt-2 px-4 py-2 text-xs text-muted-foreground"
					>
						@order332/website
					</div>
					<Collapsible.Content class="flex flex-col gap-1 mt-1">
						<div
							class="glass-card px-4 py-2 text-xs text-muted-foreground"
						>
							@order332/api
						</div>
						<div
							class="glass-card px-4 py-2 text-xs text-muted-foreground"
						>
							@order332/docs
						</div>
					</Collapsible.Content>
				</Collapsible.Root>
				<Separator />
				<ScrollArea.Root class="h-28 rounded-lg border border-white/8">
					<div class="p-3">
						{#each Array(10) as _, i}
							<p class="py-1 text-xs text-muted-foreground">
								Item {i + 1} — scrollable content row
							</p>
						{/each}
					</div>
					<ScrollArea.Scrollbar orientation="vertical" />
				</ScrollArea.Root>
			</div>

			<!-- Carousel -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Carousel</p>
				<div class="relative px-6">
					<Carousel.Root class="w-full">
						<Carousel.Content>
							{#each [1, 2, 3, 4] as i}
								<Carousel.Item class="basis-4/5">
									<div
										class="glass-card flex h-24 items-center justify-center"
									>
										<span
											class="text-xs tracking-widest text-muted-foreground"
											>Slide {i}</span
										>
									</div>
								</Carousel.Item>
							{/each}
						</Carousel.Content>
						<Carousel.Previous class="-left-2" />
						<Carousel.Next class="-right-2" />
					</Carousel.Root>
				</div>
			</div>
		</div>

		<!-- ════════════════════════════════════════════════════════ -->
		<!--  DATA & COMMANDS                                         -->
		<!-- ════════════════════════════════════════════════════════ -->
		<div class="section-label">Data & Commands</div>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
			<!-- Table -->
			<div class="glass-card flex flex-col gap-4 p-6 lg:col-span-2">
				<p class="card-label">Table</p>
				<Table.Root>
					<Table.Header>
						<Table.Row>
							<Table.Head class="text-xs">Component</Table.Head>
							<Table.Head class="text-xs">Category</Table.Head>
							<Table.Head class="text-xs">Status</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#each [["Button", "Action", "Styled"], ["Dialog", "Overlay", "Styled"], ["Accordion", "Content", "Styled"], ["Input", "Form", "Styled"], ["Calendar", "Picker", "Styled"], ["Resizable", "Layout", "Styled"]] as [name, cat, status]}
							<Table.Row>
								<Table.Cell class="text-xs font-medium"
									>{name}</Table.Cell
								>
								<Table.Cell
									class="text-xs text-muted-foreground"
									>{cat}</Table.Cell
								>
								<Table.Cell class="text-xs">
									<Badge
										variant="default"
										class="px-1.5 py-0 text-[10px]"
										>{status}</Badge
									>
								</Table.Cell>
							</Table.Row>
						{/each}
					</Table.Body>
				</Table.Root>
			</div>

			<!-- Command -->
			<div class="glass-card flex flex-col gap-0 overflow-clip p-0">
				<p class="card-label p-6 pb-3">Command</p>
				<Command.Root class="rounded-none border-0" disableInitialScroll={true}>
					<Command.Input placeholder="Type a command…" aria-label="Search commands" />
					<Command.List class="max-h-48">
						<Command.Empty class="text-xs"
							>No results found.</Command.Empty
						>
						<Command.Group heading="Suggestions">
							<Command.Item>Dashboard</Command.Item>
							<Command.Item>Settings</Command.Item>
							<Command.Item>Profile</Command.Item>
						</Command.Group>
						<Command.Separator />
						<Command.Group heading="Pages">
							<Command.Item>Blog</Command.Item>
							<Command.Item>Projects</Command.Item>
							<Command.Item>About</Command.Item>
						</Command.Group>
					</Command.List>
				</Command.Root>
			</div>

			<!-- Resizable -->
			<div class="glass-card flex flex-col gap-4 p-6 lg:col-span-3">
				<p class="card-label">Resizable</p>
				<Resizable.PaneGroup
					direction="horizontal"
					class="h-28 rounded-lg border border-white/8"
				>
					<Resizable.Pane defaultSize={30}>
						<div
							class="flex h-full items-center justify-center text-xs text-muted-foreground"
						>
							Sidebar
						</div>
					</Resizable.Pane>
					<Resizable.Handle
						class="bg-white/8 w-px hover:bg-white/20 transition-colors"
					/>
					<Resizable.Pane defaultSize={70}>
						<Resizable.PaneGroup direction="vertical">
							<Resizable.Pane defaultSize={60}>
								<div
									class="flex h-full items-center justify-center text-xs text-muted-foreground"
								>
									Main
								</div>
							</Resizable.Pane>
							<Resizable.Handle
								class="bg-white/8 h-px hover:bg-white/20 transition-colors"
							/>
							<Resizable.Pane defaultSize={40}>
								<div
									class="flex h-full items-center justify-center text-xs text-muted-foreground"
								>
									Footer
								</div>
							</Resizable.Pane>
						</Resizable.PaneGroup>
					</Resizable.Pane>
				</Resizable.PaneGroup>
				<p class="text-xs text-muted-foreground">
					Drag the dividers to resize panels.
				</p>
			</div>
		</div>

		<!-- ════════════════════════════════════════════════════════ -->
		<!--  CALENDARS                                               -->
		<!-- ════════════════════════════════════════════════════════ -->
		<div class="section-label">Calendars</div>
		<div class="grid gap-6 sm:grid-cols-2 mb-6">
			<!-- Calendar -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Calendar</p>
				<div class="flex justify-center">
					<Calendar.Calendar type="single" />
				</div>
			</div>

			<!-- Range Calendar -->
			<div class="glass-card flex flex-col gap-4 p-6">
				<p class="card-label">Range Calendar</p>
				<div class="flex justify-center">
					<RangeCalendar.RangeCalendar />
				</div>
			</div>
		</div>

		<!-- ════════════════════════════════════════════════════════ -->
		<!--  EMPTY STATE                                             -->
		<!-- ════════════════════════════════════════════════════════ -->
		<div class="section-label">Empty State</div>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
			<div
				class="glass-card flex flex-col gap-4 p-6 sm:col-span-2 lg:col-span-3"
			>
				<p class="card-label">Empty</p>
				<Empty.Root>
					<Empty.Header>
						<Empty.Title class="text-sm tracking-wide"
							>No results found</Empty.Title
						>
						<Empty.Description
							class="text-xs text-muted-foreground"
						>
							Try adjusting your search or filters to find what
							you're looking for.
						</Empty.Description>
					</Empty.Header>
					<Empty.Content>
						<div class="flex gap-2">
							<Button variant="glass" size="sm"
								>Clear filters</Button
							>
							<Button variant="ghost" size="sm">Browse all</Button
							>
						</div>
					</Empty.Content>
				</Empty.Root>
			</div>
		</div>

		<!-- Footer -->
		<div class="mt-8 flex flex-col items-center gap-2 text-center">
			<Separator class="max-w-xs" />
			<p
				class="mt-4 text-xs tracking-widest text-muted-foreground uppercase"
			>
				glass-system.css — portable · self-contained · pure CSS
			</p>
			<div class="mt-2 flex items-center gap-2">
				<Kbd class="text-[10px]">@import</Kbd>
				<span class="font-mono text-xs text-muted-foreground"
					>"glass-system.css"</span
				>
			</div>
		</div>
	</div>
</section>
