import type { MicroFrontendProps } from "@portfolio/mfe-contract";
import "./index.css";

/**
 * Component library — entry component exposed to the shell as `./App`.
 *
 * TODO:
 * - [ ] Data table
 * - [ ] Modal
 * - [ ] Dropdown
 * - [ ] Searchable select
 * - [ ] Date picker
 * - [ ] Toast notifications
 * - [ ] Multi-step form
 * - [ ] Interactive playground
 * - [ ] Dark/light themes
 * - [ ] Keyboard navigation
 * - [ ] Accessibility
 * - [ ] Responsive layouts
 * - [ ] Controlled and uncontrolled components
 */
export default function App(_props: MicroFrontendProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <h2 className="text-lg font-semibold">Component library</h2>
      <p className="mt-1 text-sm text-muted">Not implemented yet.</p>
    </div>
  );
}
