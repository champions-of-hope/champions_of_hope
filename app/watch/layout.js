// Metadata-only wrapper for the frozen /watch gallery client page. Adds no markup.
export const metadata = {
  title: "Gallery",
  description:
    "Photos from Champions of Hope benefit shows in Vancouver: local artists, packed rooms, and the causes we support.",
};

export default function WatchLayout({ children }) {
  return children;
}
