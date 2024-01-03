import TurndownService from 'turndown'
const turndownService = new TurndownService()

Deno.serve({ port: 7474 }, async (request: Request) => {
	if (request.method !== 'POST') return new Response('', { status: 405 })
	return new Response(turndownService.turndown(await request.text()))
})
