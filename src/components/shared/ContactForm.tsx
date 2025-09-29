/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { useState, useEffect } from "react"
import { Icon } from "@iconify/react"
import { ContactSchema } from "../../utils/schemas/ContactSchema"
import SendEmail from "../../services/Email"

const ContactForm = () => {
  const [lastSubmission, setLastSubmission] = useState(0)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [cooldownTime, setCooldownTime] = useState(0)

  const COOLDOWN_DURATION = 60000

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      people: "",
      message: "",
      time: new Date().toISOString().split("T")[0],
    },
    resolver: zodResolver(ContactSchema),
  })

  const { mutate, isPending, error } = useMutation({
    mutationKey: ["contact"],
    mutationFn: async (formData: FormData) => {
      return await SendEmail(formData)
    },
    onError: (error) => {
      console.log(error)
      setShowError(true)
      setShowSuccess(false)
      setTimeout(() => setShowError(false), 5000)
    },
    onSuccess: (data) => {
      console.log(data)
      setShowSuccess(true)
      setShowError(false)
      setLastSubmission(Date.now())
      reset()
      setTimeout(() => setShowSuccess(false), 5000)
    },
  })

  useEffect(() => {
    if (lastSubmission > 0) {
      const interval = setInterval(() => {
        const timeLeft = COOLDOWN_DURATION - (Date.now() - lastSubmission)
        if (timeLeft > 0) {
          setCooldownTime(Math.ceil(timeLeft / 1000))
        } else {
          setCooldownTime(0)
          clearInterval(interval)
        }
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [lastSubmission])

  function onSubmit(values: any) {
    if (cooldownTime > 0) {
      return
    }

    const formData = new FormData()
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key])
    })
    mutate(formData)
  }

  const isDisabled = isPending || cooldownTime > 0

  return (
    <div className="flex flex-col justify-center items-center p-6 w-full">
      {/* Header */}
      <div className="text-center w-full">
        <h2 className="text-4xl font-bold mb-4 text-blue-800 dark:text-blue-300">
          Contáctanos
        </h2>
        <div className="w-20 h-1 bg-red-500 mx-auto mb-4"></div>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Cuéntanos sobre tu evento y te contactaremos pronto
        </p>
      </div>

      <div className="space-y-6 w-full">
        {/* Primera fila - Nombre y Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Nombre completo
            </label>
            <input
              {...register("name")}
              placeholder="Tu nombre completo"
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all duration-300 bg-white dark:bg-gray-800"
              disabled={isDisabled}
            />
            {errors.name && (
              <p className="text-red-500 text-sm flex items-center gap-1">
                <Icon icon="mdi:alert-circle-outline" className="text-sm" />
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="tu@email.com"
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all duration-300 bg-white dark:bg-gray-800"
              disabled={isDisabled}
            />
            {errors.email && (
              <p className="text-red-500 text-sm flex items-center gap-1">
                <Icon icon="mdi:alert-circle-outline" className="text-sm" />
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Segunda fila - Teléfono y Lugar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Número de teléfono
            </label>
            <input
              {...register("phone")}
              placeholder="+54 9 11 1234-5678"
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all duration-300 bg-white dark:bg-gray-800"
              disabled={isDisabled}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm flex items-center gap-1">
                <Icon icon="mdi:alert-circle-outline" className="text-sm" />
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Lugar del evento
            </label>
            <input
              {...register("location")}
              placeholder="Ciudad, provincia"
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all duration-300 bg-white dark:bg-gray-800"
              disabled={isDisabled}
            />
            {errors.location && (
              <p className="text-red-500 text-sm flex items-center gap-1">
                <Icon icon="mdi:alert-circle-outline" className="text-sm" />
                {errors.location.message}
              </p>
            )}
          </div>
        </div>

        {/* Cantidad de personas */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Cantidad de personas
          </label>
          <input
            {...register("people")}
            placeholder="Ej: 50 personas"
            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all duration-300 bg-white dark:bg-gray-800"
            disabled={isDisabled}
          />
          {errors.people && (
            <p className="text-red-500 text-sm flex items-center gap-1">
              <Icon icon="mdi:alert-circle-outline" className="text-sm" />
              {errors.people.message}
            </p>
          )}
        </div>

        {/* Mensaje */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Cuéntanos sobre tu evento
          </label>
          <textarea
            {...register("message")}
            rows={5}
            placeholder="Describe tu evento, fecha tentativa, estilo que buscas, presupuesto aproximado, etc."
            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all duration-300 resize-vertical bg-white dark:bg-gray-800"
            disabled={isDisabled}
          />
          {errors.message && (
            <p className="text-red-500 text-sm flex items-center gap-1">
              <Icon icon="mdi:alert-circle-outline" className="text-sm" />
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Botón de envío */}
        <div className="flex justify-center pt-6">
          <button
            type="submit"
            disabled={isDisabled}
            onClick={handleSubmit(onSubmit)}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 ${
              isDisabled
                ? "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
            }`}
          >
            {isPending ? (
              <>
                <Icon icon="mdi:loading" className="animate-spin text-xl" />
                Enviando...
              </>
            ) : cooldownTime > 0 ? (
              <>
                <Icon icon="mdi:clock" className="text-xl" />
                Espera {cooldownTime}s
              </>
            ) : (
              <>
                <Icon icon="mdi:send" className="text-xl" />
                Enviar Mensaje
              </>
            )}
          </button>
        </div>

        {/* Notificaciones */}
        {showSuccess && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl flex items-center gap-3 animate-pulse">
            <Icon
              icon="mdi:check-circle"
              className="text-green-600 text-2xl flex-shrink-0"
            />
            <div>
              <p className="text-green-800 dark:text-green-200 font-semibold">
                ¡Mensaje enviado con éxito!
              </p>
              <p className="text-green-700 dark:text-green-300 text-sm">
                Te contactaremos pronto para coordinar todos los detalles de tu
                evento.
              </p>
            </div>
          </div>
        )}

        {showError && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl flex items-center gap-3">
            <Icon
              icon="mdi:alert-circle"
              className="text-red-600 text-2xl flex-shrink-0"
            />
            <div>
              <p className="text-red-800 dark:text-red-200 font-semibold">
                Error al enviar el mensaje
              </p>
              <p className="text-red-700 dark:text-red-300 text-sm">
                {error?.message ||
                  "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo."}
              </p>
            </div>
          </div>
        )}

        {cooldownTime > 0 && (
          <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl flex items-center gap-3">
            <Icon
              icon="mdi:clock"
              className="text-yellow-600 text-2xl flex-shrink-0"
            />
            <div>
              <p className="text-yellow-800 dark:text-yellow-200 font-semibold">
                Espera un momento
              </p>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                Puedes enviar otro mensaje en {cooldownTime} segundos para
                evitar spam.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactForm
