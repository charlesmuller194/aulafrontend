import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "./Button";
import { IconArrowRight, IconCheck, IconMail, IconSparkle } from "./icons";
import "../styles/contact.css";

type Status = "idle" | "loading" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "message" | "captcha", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const EMPTY = { name: "", email: "", message: "", company: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const hasRecaptcha = Boolean(SITE_KEY);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleCaptcha(token: string | null) {
    setCaptchaToken(token);
    if (token) setErrors((prev) => ({ ...prev, captcha: undefined }));
  }

  function resetCaptcha() {
    recaptchaRef.current?.reset();
    setCaptchaToken(null);
  }

  function validate(): Errors {
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = "Informe o seu nome.";
    if (!EMAIL_RE.test(form.email)) next.email = "Informe um e-mail válido.";
    if (form.message.trim().length < 10)
      next.message = "Conte um pouco mais (mínimo 10 caracteres).";
    if (hasRecaptcha && !captchaToken)
      next.captcha = "Confirme que você não é um robô.";
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Honeypot: se o campo oculto foi preenchido, é provável que seja um bot.
    if (form.company) return;

    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          recaptchaToken: captchaToken,
        }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error ?? "Erro ao enviar mensagem.");
      }

      setStatus("success");
      setForm(EMPTY);
      resetCaptcha();
    } catch (error) {
      setErrorMsg(
        error instanceof Error ? error.message : "Erro ao enviar mensagem."
      );
      setStatus("error");
      // O token é de uso único: força um novo desafio na próxima tentativa.
      resetCaptcha();
    }
  }

  return (
    <section className="container" id="contact">
      <div className="contact-grid">
        <div className="contact-info">
          <span className="section-tag">Contato</span>
          <h2>Vamos construir algo juntos</h2>
          <p>
            Conte o desafio da sua empresa e a gente desenha a melhor solução.
            Sem compromisso — respondemos rápido.
          </p>

          <ul className="contact-points">
            <li>
              <IconMail size={20} />
              contato@mullertech.com.br
            </li>
            <li>
              <IconCheck size={20} />
              Resposta em até 24h úteis
            </li>
            <li>
              <IconSparkle size={20} />
              Atendimento remoto em todo o Brasil
            </li>
          </ul>
        </div>

        <div className="contact-form-wrap">
          {status === "success" ? (
            <div className="contact-success" role="status">
              <span className="contact-success__icon" aria-hidden="true">
                <IconCheck size={28} />
              </span>
              <h3>Mensagem enviada!</h3>
              <p>
                Obrigado pelo contato. A equipe da Müller&nbsp;TI responde em
                breve no e-mail informado.
              </p>
              <Button
                text="Enviar outra mensagem"
                secondary
                onClick={() => setStatus("idle")}
              />
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {/* Honeypot anti-spam (invisível para usuários) */}
              <input
                className="hp"
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                value={form.company}
                onChange={handleChange}
                aria-hidden="true"
              />

              <div className="field">
                <label htmlFor="name">Nome</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Como podemos te chamar?"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <span className="field-error" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="voce@empresa.com.br"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <span className="field-error" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="field">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Conte sobre o seu projeto ou desafio..."
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <span className="field-error" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              {hasRecaptcha && (
                <div className="field recaptcha-wrap">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={SITE_KEY}
                    theme="dark"
                    onChange={handleCaptcha}
                    onExpired={() => setCaptchaToken(null)}
                    onErrored={() => setCaptchaToken(null)}
                  />
                  {errors.captcha && (
                    <span className="field-error" role="alert">
                      {errors.captcha}
                    </span>
                  )}
                </div>
              )}

              {status === "error" && (
                <p className="form-alert" role="alert">
                  {errorMsg}
                </p>
              )}

              <Button
                text={status === "loading" ? "Enviando..." : "Enviar mensagem"}
                type="submit"
                fullWidth
                disabled={status === "loading"}
                icon={<IconArrowRight size={16} />}
              />
              <p className="contact-note">
                Ao enviar, você concorda em ser contatado pela equipe Müller&nbsp;TI.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
