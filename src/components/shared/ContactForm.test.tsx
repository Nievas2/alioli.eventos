/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { render, screen, waitFor, cleanup } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter } from "react-router-dom"
import ContactForm from "./ContactForm"
import * as EmailService from "@/services/Email"

// Mock del servicio de email
vi.mock("@/services/Email", () => ({
  default: vi.fn(),
}))

// Mock de framer motion
vi.mock("motion/react", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

// Helper para renderizar con providers
const renderWithProviders = (component: React.ReactElement) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  })

  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{component}</BrowserRouter>
    </QueryClientProvider>
  )
}

describe("ContactForm", () => {
  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    user = userEvent.setup()
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.useRealTimers()
    cleanup()
  })

  const fillCompleteForm = async () => {
    await user.type(screen.getByLabelText(/nombre completo/i), "Juan Pérez")
    await user.type(screen.getByLabelText(/email/i), "juan@example.com")
    await user.type(screen.getByLabelText(/número de teléfono/i), "1234567890")
    await user.type(screen.getByLabelText(/lugar del evento/i), "Buenos Aires")
    await user.type(
      screen.getByLabelText(/cantidad de personas/i),
      "50 personas"
    )
    await user.type(
      screen.getByLabelText(/cuéntanos sobre tu evento/i),
      "Evento corporativo con aproximadamente 50 personas en Buenos Aires"
    )
  }
  //4 5 6 11 12 13 14 15
  /* funcionando todos */
  describe("Renderizado inicial", () => {
    it("debe renderizar todos los campos del formulario", () => {
      renderWithProviders(<ContactForm />)

      expect(screen.getByLabelText(/nombre completo/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/número de teléfono/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/lugar del evento/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/cantidad de personas/i)).toBeInTheDocument()
      expect(
        screen.getByLabelText(/cuéntanos sobre tu evento/i)
      ).toBeInTheDocument()
    })

    it("debe renderizar el botón de envío", () => {
      renderWithProviders(<ContactForm />)
      expect(
        screen.getByRole("button", { name: /enviar mensaje/i })
      ).toBeInTheDocument()
    })

    it('debe mostrar el título "Contáctanos"', () => {
      renderWithProviders(<ContactForm />)
      expect(screen.getByText(/contáctanos/i)).toBeInTheDocument()
    })
  })

  describe("Validaciones de formulario", () => {
    it("debe mostrar error cuando el nombre está vacío", async () => {
      renderWithProviders(<ContactForm />)

      // Llenar todos los campos excepto el nombre
      await user.type(screen.getByLabelText(/email/i), "test@example.com")
      await user.type(
        screen.getByLabelText(/número de teléfono/i),
        "1234567890"
      )
      await user.type(
        screen.getByLabelText(/lugar del evento/i),
        "Buenos Aires"
      )
      await user.type(
        screen.getByLabelText(/cantidad de personas/i),
        "50 personas"
      )
      await user.type(
        screen.getByLabelText(/cuéntanos sobre tu evento/i),
        "Evento de prueba"
      )

      // Enviar el formulario sin llenar el nombre
      const submitButton = screen.getByRole("button", {
        name: /enviar mensaje/i,
      })
      await user.click(submitButton)

      // Verificar que se muestra el mensaje de error
      await waitFor(() => {
        expect(screen.getByText(/minimo 2 caracteres/i)).toBeInTheDocument()
      })
    })

    it("debe mostrar error con email inválido", async () => {
      renderWithProviders(<ContactForm />)

      // Llenar todos los campos excepto el nombre
      await user.type(screen.getByLabelText(/email/i), "test@example")
      await user.type(screen.getByLabelText(/nombre completo/i), "Juan Perez")
      await user.type(
        screen.getByLabelText(/número de teléfono/i),
        "1234567890"
      )
      await user.type(
        screen.getByLabelText(/lugar del evento/i),
        "Buenos Aires"
      )
      await user.type(
        screen.getByLabelText(/cantidad de personas/i),
        "50 personas"
      )
      await user.type(
        screen.getByLabelText(/cuéntanos sobre tu evento/i),
        "Evento de prueba"
      )

      // Enviar el formulario sin llenar el nombre
      const submitButton = screen.getByRole("button", {
        name: /enviar mensaje/i,
      })
      await user.click(submitButton)

      // Verificar que se muestra el mensaje de error
      await waitFor(() => {
        expect(
          screen.getByText(/formato de email incorrecto/i)
        ).toBeInTheDocument()
      })
    })

    it("debe mostrar error cuando el teléfono está vacío", async () => {
      renderWithProviders(<ContactForm />)

      // Llenar todos los campos excepto el nombre
      await user.type(screen.getByLabelText(/email/i), "test@example")
      await user.type(screen.getByLabelText(/nombre completo/i), "Juan Perez")
      await user.type(
        screen.getByLabelText(/lugar del evento/i),
        "Buenos Aires"
      )
      await user.type(
        screen.getByLabelText(/cantidad de personas/i),
        "50 personas"
      )
      await user.type(
        screen.getByLabelText(/cuéntanos sobre tu evento/i),
        "Evento de prueba"
      )

      // Enviar el formulario sin llenar el nombre
      const submitButton = screen.getByRole("button", {
        name: /enviar mensaje/i,
      })
      await user.click(submitButton)

      // Verificar que se muestra el mensaje de error
      await waitFor(() => {
        expect(screen.getByText(/minimo 10 caracteres/i)).toBeInTheDocument()
      })
    })
  })

  /* funcionando todos */
  describe("Envío de formulario", () => {
    it("debe enviar el formulario con datos válidos", async () => {
      const mockSendEmail = vi.mocked(EmailService.default)
      mockSendEmail.mockResolvedValueOnce({ status: 200, text: "OK" } as any)

      renderWithProviders(<ContactForm />)
      await fillCompleteForm()

      const submitButton = screen.getByRole("button", {
        name: /enviar mensaje/i,
      })
      await user.click(submitButton)

      await waitFor(() => {
        expect(mockSendEmail).toHaveBeenCalledTimes(1)
      })
    })

    it("debe mostrar mensaje de éxito después de enviar", async () => {
      const mockSendEmail = vi.mocked(EmailService.default)
      mockSendEmail.mockResolvedValueOnce({ status: 200, text: "OK" } as any)

      renderWithProviders(<ContactForm />)
      await fillCompleteForm()

      const submitButton = screen.getByRole("button", {
        name: /enviar mensaje/i,
      })
      await user.click(submitButton)

      expect(
        await screen.findByText(/mensaje enviado con éxito/i)
      ).toBeInTheDocument()
    })

    it("debe limpiar el formulario después de envío exitoso", async () => {
      const mockSendEmail = vi.mocked(EmailService.default)
      mockSendEmail.mockResolvedValueOnce({ status: 200, text: "OK" } as any)

      renderWithProviders(<ContactForm />)
      await fillCompleteForm()

      const nameInput = screen.getByLabelText(
        /nombre completo/i
      ) as HTMLInputElement
      expect(nameInput.value).toBe("Juan Pérez")

      const submitButton = screen.getByRole("button", {
        name: /enviar mensaje/i,
      })
      await user.click(submitButton)

      await waitFor(() => {
        expect(nameInput.value).toBe("")
      })
    })

    it("debe mostrar mensaje de error cuando falla el envío", async () => {
      const mockSendEmail = vi.mocked(EmailService.default)

      // Usamos mockImplementationOnce y manejamos el error correctamente
      mockSendEmail.mockImplementationOnce(() =>
        Promise.reject(new Error("Error de red"))
      )

      renderWithProviders(<ContactForm />)
      await fillCompleteForm()

      const submitButton = screen.getByRole("button", {
        name: /enviar mensaje/i,
      })

      await user.click(submitButton)

      // Esperamos a que aparezca el mensaje de error principal
      await waitFor(() => {
        expect(
          screen.getByText(/error al enviar el mensaje/i)
        ).toBeInTheDocument()
      })

      // Verificamos que se muestra el mensaje de error específico "Error de red"
      // en lugar del mensaje genérico
      expect(screen.getByText(/error de red/i)).toBeInTheDocument()
    })
  })

  describe("Sistema de Cooldown", () => {
    it("debe activar cooldown después de envío exitoso", async () => {
      const mockSendEmail = vi.mocked(EmailService.default)
      mockSendEmail.mockResolvedValueOnce({ status: 200, text: "OK" } as any)

      renderWithProviders(<ContactForm />)
      await fillCompleteForm()

      const submitButton = screen.getByRole("button", {
        name: /enviar mensaje/i,
      })
      await user.click(submitButton)

      // Verificar que se muestra el mensaje de cooldown
      await waitFor(() => {
        expect(screen.getByText(/espera un momento/i)).toBeInTheDocument()
      })

      // Verificar que el botón muestra el contador de cooldown
      expect(screen.getByText(/espera \d+s/i)).toBeInTheDocument()

      // Verificar que el botón está deshabilitado durante el cooldown
      expect(submitButton).toBeDisabled()
    })
  })

  describe("Estados de carga", () => {
    it("debe mostrar estado de carga durante el envío", async () => {
      // Mock que nunca se resuelve para mantener el estado de carga
      const mockSendEmail = vi.mocked(EmailService.default)
      mockSendEmail.mockImplementationOnce(() => new Promise(() => {}))

      renderWithProviders(<ContactForm />)
      await fillCompleteForm()

      const submitButton = screen.getByRole("button", {
        name: /enviar mensaje/i,
      })
      await user.click(submitButton)

      // Verificar que se muestra el estado de carga
      expect(screen.getByText(/enviando/i)).toBeInTheDocument()

      // Verificar que el botón está deshabilitado durante el envío
      expect(submitButton).toBeDisabled()
    })
  })
})
