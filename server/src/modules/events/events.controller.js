const events = [
  {
    id: 1,
    slug: "chakravyuh-2",
    title: "Chakravyuh 2.0",
    tagline: "The flagship team tournament — four rounds, one champion",
    status: "upcoming",
  },
  {
    id: 2,
    slug: "weekly-cp-contest",
    title: "Weekly CP Contest",
    tagline: "Rated round, every week",
    status: "upcoming",
  },
  {
    id: 3,
    slug: "mock-icpc",
    title: "Mock ICPC",
    tagline: "Team arena practice for regionals",
    status: "upcoming",
  },
];

export function listEvents(req, res) {
  res.json({ success: true, data: events });
}

export function getEventBySlug(req, res) {
  const event = events.find((e) => e.slug === req.params.slug);

  if (!event) {
    return res.status(404).json({ success: false, error: "Event not found" });
  }

  res.json({ success: true, data: event });
}