export default function date(req, res) {
  return res.status(200).json(new Date());
}
