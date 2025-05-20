export default function handler(req, res) {
  res.status(200).json({ message: "Hello from Vercel!" });
}

// export default function handler(req, res) {
//     res.status(200).json([{ message: "Hello from Vercel!" }, { message: "Hello 2" }]);
//   }