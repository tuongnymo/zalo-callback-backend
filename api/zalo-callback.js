export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    console.log('📥 Zalo Callback Received:', data);

    // TODO: Xử lý dữ liệu callback từ Zalo tại đây nếu cần

    return res.status(200).json({ message: 'Received' });
  }

  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
