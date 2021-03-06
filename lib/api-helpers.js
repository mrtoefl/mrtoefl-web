export function extractUser(req) {
  if (!req.user) return null;
  const { name, email } = req.user;
  return { name, email };
}
