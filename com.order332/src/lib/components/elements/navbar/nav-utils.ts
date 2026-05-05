import type { NavMenuLink } from "./nav-types.js";

export function menuTriggerActive(items: NavMenuLink[], isActive: (href: string) => boolean): boolean {
	return items.some((l) => !l.external && isActive(l.href));
}
