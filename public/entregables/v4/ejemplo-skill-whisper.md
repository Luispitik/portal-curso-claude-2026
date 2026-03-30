---
name: salgadoia-whisper-transcriber
description: "Transcribe audio via OpenAI Audio Transcriptions API (Whisper). | Builded by SalgadoIA"
author: SalgadoIA / Luis Salgado
context: |
  Adaptada para consultores de IA y automatización que trabajan con PYMEs y profesionales.
  Stack principal: Next.js, n8n, Claude Code, Supabase. Clientes en español, docs técnicos en inglés.
auto_activate: true
homepage: https://platform.openai.com/docs/guides/speech-to-text
metadata: {"moltbot":{"emoji":"","requires":{"bins":["curl"],"env":["OPENAI_API_KEY"]},"primaryEnv":"OPENAI_API_KEY"}}
---

@_shared-assets/salgadoia-brand.md


# SalgadoIA Whisper Transcriber - Audio Transcription API

## Contexto del Operador
- **Operador**: SalgadoIA (Luis Salgado) — Consultor IA, desarrollador web, formador
- **Stack habitual**: Next.js + Vercel, n8n, Claude Code + MCP, Supabase
- **Clientes tipo**: PYMEs españolas, profesionales/autónomos, corporativos
- **Idioma**: Entregables y comunicación en español. Código y docs técnicos en inglés.
- Adapta ejemplos, plantillas y recomendaciones a este perfil cuando sea relevante.

Transcribe an audio file via OpenAI's `/v1/audio/transcriptions` endpoint.

## Quick start

```bash
{baseDir}/scripts/transcribe.sh /path/to/audio.m4a
```

Defaults:
- Model: `whisper-1`
- Output: `<input>.txt`

## Useful flags

```bash
{baseDir}/scripts/transcribe.sh /path/to/audio.ogg --model whisper-1 --out /tmp/transcript.txt
{baseDir}/scripts/transcribe.sh /path/to/audio.m4a --language en
{baseDir}/scripts/transcribe.sh /path/to/audio.m4a --prompt "Speaker names: Peter, Daniel"
{baseDir}/scripts/transcribe.sh /path/to/audio.m4a --json --out /tmp/transcript.json
```

## API key

Set `OPENAI_API_KEY`, or configure it in `~/.clawdbot/moltbot.json`:

```json5
{
  skills: {
    "openai-whisper-api": {
      apiKey: "OPENAI_KEY_HERE"
    }
  }
}
```

---
> Builded by SalgadoIA
