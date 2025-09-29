import emailjs from "@emailjs/browser"

export default async function SendEmail(formData: FormData) {
  try {
    const data = Object.fromEntries(formData.entries())
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      data
    )
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}
