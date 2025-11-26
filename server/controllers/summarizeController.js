import { geminiModel } from "../config/gemini.js";

export const summarizePdf = async (req, res) => {
  try {
    const { pdfText } = req.body;

    if (!pdfText?.trim()) {
      return res.status(400).json({ error: "PDF text content is required!" });
    }

    const prompt = `
      Summarize this PDF text in 6–12 bullet points,
      professional tone, short and readable:

      """${pdfText}"""
    `;

    const result = await geminiModel.generateContent(prompt);
    const summary = result.response.text();

    res.status(200).json({ summary });
  } catch (err) {
    console.error("❌ Error summarizing PDF:", err);
    res.status(500).json({ error: "Summarization failed!" });
  }
};
