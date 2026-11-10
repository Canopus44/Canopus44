<div align="center">
  <img src="assets/hero.svg" width="100%" alt="Santiago Molina — CEO & Founder de Cinnamon" />
</div>

<div align="center">
  <a href="https://cinnamon-hub.com"><img src="https://img.shields.io/badge/cinnamon--hub.com-E08A4B?style=for-the-badge&logo=astro&logoColor=white" alt="cinnamon-hub.com" /></a>
  <a href="https://x.com/Canopus44_"><img src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white" alt="X / Twitter" /></a>
  <a href="https://github.com/Canopus44?tab=repositories"><img src="https://img.shields.io/badge/repositorios-181717?style=for-the-badge&logo=github&logoColor=white" alt="Repositorios" /></a>
</div>

<br />

> **El producto se defiende solo cuando la infraestructura no pide permiso.**
>
> Soy **Santiago Molina**, CEO y fundador de **[Cinnamon](https://cinnamon-hub.com)** — la plataforma omnicanal donde la conversación y la operación del negocio comparten el mismo dato: WhatsApp, Instagram, TikTok y widget a un lado; clientes, inventario, ventas y compras al otro.
>
> No solo dirijo el producto: vivo en el código. NestJS y Angular en el día a día, Terraform, Docker y AWS cuando toca bajar a la infraestructura y hacer que todo aguante.

---

### 🧭 Qué hago

- **Producto** — Defino qué se construye y por qué. Dos productos independientes (Chat y ERP) que comparten autenticación y no comparten base de datos: cada uno con su dueño, su contrato y su ritmo de despliegue.
- **Arquitectura** — Monorepo imposible, así que siete repos con reglas claras: JWT con `sub`, `email`, `role` y `companyId`; integración **solo por HTTP REST**; cero acceso cruzado a bases de datos.
- **Código** — Backends NestJS, frontends Angular, librería de componentes propia, shell de escritorio en Electron y una consola en Rust cuando Docker necesita una cara.
- **Infraestructura** — Terraform, ECR, S3, CloudFront, CloudWatch y systemd. Si no está en código, no existe.

### 🍂 Cinnamon

```text
   WhatsApp · Instagram · TikTok · Meta · Widget
                        │
                        ▼
              chat-backend  (NestJS · Postgres + Mongo)
                        │  JWT compartido · sin acceso cruzado a BD
                        ▼
               erp-backend  (NestJS · Postgres)
                        │
                        ▼
   CloudFront + S3  ·  ECR  ·  Terraform  ·  CloudWatch
```

| Producto | Qué resuelve | Stack |
| :--- | :--- | :--- |
| **Chat** | Operación de conversaciones en tiempo real, multicanal y multiempresa | NestJS 12 · WebSockets · MongoDB · Angular 22 |
| **ERP** | Clientes, productos, inventario, ventas, compras, citas y reportes | NestJS 12 · TypeORM · PostgreSQL · Angular 22 |
| **UI** | Sistema de diseño `@cinnamon-sas/ui` con tokens y Storybook | Angular 22 · PrimeNG 22 |
| **Platform** | Terraform, despliegue a producción, stack de desarrollo y escritorio | AWS · Docker Compose · Electron · Caddy |

### 🧰 Stack

<div align="center">

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js" />
<img src="https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white" alt="NestJS" />
<img src="https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white" alt="Angular" />
<img src="https://img.shields.io/badge/PrimeNG-0F97C7?style=flat-square&logo=primeng&logoColor=white" alt="PrimeNG" />
<img src="https://img.shields.io/badge/Rust-000000?style=flat-square&logo=rust&logoColor=white" alt="Rust" />
<img src="https://img.shields.io/badge/Svelte-FF3E00?style=flat-square&logo=svelte&logoColor=white" alt="Svelte" />
<img src="https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=csharp&logoColor=white" alt="C#" />
<img src="https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white" alt="PHP" />

<img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL" />
<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB" />
<img src="https://img.shields.io/badge/TypeORM-FE0803?style=flat-square&logo=typeorm&logoColor=white" alt="TypeORM" />
<img src="https://img.shields.io/badge/OpenAPI-6BA539?style=flat-square&logo=openapiinitiative&logoColor=white" alt="OpenAPI" />
<img src="https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white" alt="JWT" />

<img src="https://img.shields.io/badge/AWS-FF9900?style=flat-square" alt="AWS" />
<img src="https://img.shields.io/badge/Terraform-844FBA?style=flat-square&logo=terraform&logoColor=white" alt="Terraform" />
<img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker" />
<img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white" alt="GitHub Actions" />
<img src="https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux" />
<img src="https://img.shields.io/badge/Electron-47848F?style=flat-square&logo=electron&logoColor=white" alt="Electron" />
<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" alt="Git" />

</div>

### 🚀 Proyectos que vale la pena abrir

| Repo | Qué es | Stack |
| :--- | :--- | :--- |
| **[git-profile-switcher](https://github.com/Canopus44/git-profile-switcher)** | Cambia usuario, email, llave SSH y cuenta de `gh` con un clic. Nació de fricción real: trabajo y proyectos personales en la misma máquina. | C# · PowerShell |
| **[cinnamon-docker](https://github.com/Canopus44/cinnamon-docker)** | Panel de escritorio para Docker y el stack de Cinnamon: contenedores, logs y estado sin abrir la terminal. | Rust · Svelte · TypeScript |
| **[opencode-ai-stack](https://github.com/Canopus44/opencode-ai-stack)** | Stack de agentes de IA para el equipo: configuración de OpenCode, MCP, *skills* y scripts de instalación multiplataforma. | PowerShell · Shell |
| **[halloween-movie-calendar](https://github.com/Canopus44/halloween-movie-calendar)** | 31 noches, 31 películas. Landing interactiva con datos reales de TMDB y despliegue estático. | TypeScript · Supabase · Vite |
| **[mr-fix-it](https://github.com/Canopus44/mr-fix-it)** | Landing de servicio técnico de celulares en Medellín, pensada para convertir desde el móvil. | React 18 · Vite |

### ⚙️ Cómo trabajo

- **Si no corre en contenedor, no es reproducible.** El stack completo se levanta desde un solo comando; nadie arranca servicios a mano en su máquina.
- **Un PR por repo.** Un cambio que cruza aplicaciones son varios PRs enlazados, nunca un commit gigante que nadie puede revisar.
- **El contrato primero.** El OpenAPI se genera desde el código y jamás se edita a mano: si el contrato miente, el cliente se rompe en producción.
- **La migración se escribe una vez.** Nada de `synchronize: true` ni "arreglemos la base en caliente".
- **Sin respuesta lenta.** Los servicios tienen *health check*, *start period* y límites de memoria antes de ver un solo usuario real.
- **Documentar es parte de construir.** Bitácoras, informes técnicos y `AGENTS.md` en cada repo: el contexto no puede vivir solo en la cabeza del fundador.

### 📡 En este momento

- 🍂 Consolidando **Cinnamon**: Chat + ERP sobre un solo JWT, multiempresa y despliegue con Terraform en AWS.
- 🧾 Metiendo **facturación electrónica DIAN** dentro del ERP, con todo lo que implica en validaciones y cumplimiento.
- 🤖 Explorando **agentes de IA y MCP** como parte del ciclo de desarrollo, no como demo de fin de semana.
- 🦀 Aprendiendo Rust en serio, a punta de escribir herramientas que uso todos los días.

---

<div align="center">
  <sub><b>Medellín, Colombia</b> · UTC−5 · construyendo en público, desplegando sin drama</sub>
</div>

---

## 🇬🇧 In English

I'm **Santiago Molina**, **CEO & Founder of [Cinnamon](https://cinnamon-hub.com)** — an omnichannel platform where conversation and business operations share the same data: WhatsApp, Instagram, TikTok and web widget on one side; customers, inventory, sales, purchases and reporting on the other.

I don't just run the roadmap — I'm in the codebase. **NestJS** backends, **Angular** frontends, a shared design system, and **Terraform on AWS** when the infrastructure needs a decision. Two products, separate databases, a single shared JWT, and integration strictly over REST.

- 🧱 **Architecture:** seven repos, one contract, zero cross-database access.
- 🐳 **Reproducibility:** everything runs in Docker Compose; nothing is started by hand.
- 📐 **Contract-first:** OpenAPI generated from code, never hand-edited.
- ☁️ **Infrastructure as code:** ECR, S3, CloudFront, CloudWatch and Terraform — or it doesn't exist.

**Stack:** TypeScript · NestJS · Angular · Node.js · PostgreSQL · MongoDB · Terraform · AWS · Docker · Rust · C# · Linux

**Find me:** [cinnamon-hub.com](https://cinnamon-hub.com) · [X @Canopus44_](https://x.com/Canopus44_)
