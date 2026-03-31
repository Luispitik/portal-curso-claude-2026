import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Privacidad — Curso Claude 2026",
  description: "Informacion sobre el tratamiento de datos personales",
};

export default function PrivacidadPage() {
  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-3xl flex-1 px-6 py-12">
        <h1 className="mb-8 text-3xl font-bold text-text-primary">
          Politica de Privacidad
        </h1>
        <div className="space-y-6 text-text-secondary leading-relaxed">
          <p className="text-sm text-text-secondary/60">
            Ultima actualizacion: 31 de marzo de 2026
          </p>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-text-primary">
              1. Responsable del tratamiento
            </h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>
                <strong className="text-text-primary">Identidad</strong>: Next
                Gen AI Institute (Luis Salgado &amp; Angel Aparicio)
              </li>
              <li>
                <strong className="text-text-primary">Email de contacto</strong>
                : luis@salgadoia.com
              </li>
              <li>
                <strong className="text-text-primary">Sitio web</strong>:
                portal-claude-2026.vercel.app
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-text-primary">
              2. Datos que recopilamos
            </h2>
            <p>
              Este portal recopila la{" "}
              <strong className="text-text-primary">minima informacion</strong>{" "}
              necesaria para su funcionamiento:
            </p>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>
                <strong className="text-text-primary">
                  Registro de descargas
                </strong>
                : nombre del archivo descargado, seccion del curso, fecha y hora
              </li>
              <li>
                <strong className="text-text-primary">User-Agent</strong>:
                informacion tecnica del navegador (tipo, version, sistema
                operativo) enviada automaticamente con cada peticion HTTP
              </li>
              <li>
                <strong className="text-text-primary">
                  Direccion IP (temporal)
                </strong>
                : utilizada exclusivamente para rate limiting (proteccion contra
                abuso). No se almacena en base de datos.
              </li>
            </ul>
            <div className="mt-3 rounded-lg border border-border bg-bg-card p-4">
              <p className="text-sm">
                <strong className="text-success">No recopilamos</strong>: nombres,
                emails, telefonos, direcciones, datos de pago, cookies de
                seguimiento, ni ningun dato que permita identificar
                personalmente a un usuario.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-text-primary">
              3. Finalidad del tratamiento
            </h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>
                <strong className="text-text-primary">Estadisticas de uso</strong>:
                saber que materiales se descargan mas para mejorar el curso
              </li>
              <li>
                <strong className="text-text-primary">Proteccion del servicio</strong>:
                rate limiting para evitar abuso automatizado
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-text-primary">
              4. Base juridica
            </h2>
            <p>
              El tratamiento se basa en el{" "}
              <strong className="text-text-primary">interes legitimo</strong>{" "}
              (art. 6.1.f RGPD) de mejorar el servicio educativo y proteger la
              plataforma contra abusos. No tratamos datos especialmente
              protegidos ni tomamos decisiones automatizadas que afecten a los
              usuarios.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-text-primary">
              5. Almacenamiento y seguridad
            </h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>
                Los datos se almacenan en{" "}
                <strong className="text-text-primary">Supabase</strong>{" "}
                (infraestructura AWS, region EU cuando disponible)
              </li>
              <li>
                Las comunicaciones se cifran mediante{" "}
                <strong className="text-text-primary">HTTPS/TLS</strong>
              </li>
              <li>
                El acceso a la base de datos esta restringido mediante claves de
                servicio
              </li>
              <li>
                Los datos de descarga se conservan por un maximo de{" "}
                <strong className="text-text-primary">12 meses</strong>, tras lo
                cual se eliminan automaticamente
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-text-primary">
              6. Tus derechos (RGPD)
            </h2>
            <p>Puedes ejercer los siguientes derechos escribiendo a luis@salgadoia.com:</p>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>
                <strong className="text-text-primary">Acceso</strong>: saber que
                datos tenemos sobre ti
              </li>
              <li>
                <strong className="text-text-primary">Rectificacion</strong>:
                corregir datos inexactos
              </li>
              <li>
                <strong className="text-text-primary">Supresion</strong>:
                solicitar la eliminacion de tus datos
              </li>
              <li>
                <strong className="text-text-primary">Oposicion</strong>:
                oponerte al tratamiento
              </li>
              <li>
                <strong className="text-text-primary">Portabilidad</strong>:
                recibir tus datos en formato estructurado
              </li>
            </ul>
            <p className="mt-2">
              Tambien puedes presentar una reclamacion ante la{" "}
              <strong className="text-text-primary">
                Agencia Espanola de Proteccion de Datos
              </strong>{" "}
              (aepd.es).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-text-primary">
              7. Uso de Inteligencia Artificial
            </h2>
            <div className="rounded-lg border border-accent/30 bg-accent/5 p-4">
              <p>
                Este portal ha sido{" "}
                <strong className="text-text-primary">
                  disenado y desarrollado con asistencia de Inteligencia
                  Artificial
                </strong>{" "}
                (Claude de Anthropic). Esto incluye:
              </p>
              <ul className="ml-4 mt-2 list-disc space-y-1">
                <li>Generacion de codigo del portal (Next.js, componentes)</li>
                <li>
                  Creacion de guias de contenido educativo (las guias completas
                  de cada modulo)
                </li>
                <li>Redaccion asistida de textos descriptivos</li>
              </ul>
              <p className="mt-2">
                Todo el contenido generado por IA ha sido{" "}
                <strong className="text-text-primary">
                  revisado y aprobado por los instructores
                </strong>{" "}
                (Luis Salgado y Angel Aparicio) antes de su publicacion. La IA
                no toma decisiones autonomas sobre el contenido ni tiene acceso
                a datos personales de los usuarios.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-text-primary">
              8. Cookies
            </h2>
            <p>
              Este portal{" "}
              <strong className="text-text-primary">
                no utiliza cookies de seguimiento, publicidad ni analitica
              </strong>
              . Las unicas cookies que pueden existir son:
            </p>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>
                <strong className="text-text-primary">Cookies tecnicas</strong>{" "}
                del hosting (Vercel): necesarias para el funcionamiento del
                sitio, gestion de CDN y proteccion contra ataques. Se consideran
                exentas de consentimiento segun la LSSI-CE.
              </li>
            </ul>
            <p className="mt-2">
              No utilizamos Google Analytics, Facebook Pixel, ni ninguna
              herramienta de tracking de terceros.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-text-primary">
              9. Cambios en esta politica
            </h2>
            <p>
              Nos reservamos el derecho de modificar esta politica. Cualquier
              cambio sera publicado en esta pagina con la fecha de actualizacion
              correspondiente.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
