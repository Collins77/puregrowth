import { FaWhatsapp } from "react-icons/fa"

const WhatsAppButton = () => {
  const phoneNumber = "254736716020" // 👈 replace with your WhatsApp number
  const message = "Hello! I'm interested in your products on crope core."

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 z-50 animate-pulse"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}

export default WhatsAppButton
