export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const payload = req.body;
      if (payload.status === 'TXN_SUCCESS' || payload.event === 'payment.authorized' || payload.status === 'success') {
        res.status(200).json({ message: 'Payment Success' });
      } else {
        res.status(400).json({ message: 'Payment Failed' });
      }
    } catch (error) {
      console.error('Webhook error:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
