const config = {
	username: "leandro",
	terminal: {
		fixedheight: true,
		backgroundcolor: "#121317",
		windowcolor: "#1e212b",
		glowcolor: "none"
	},
	prompt: {
		ctrlc: true,
		placeholder: "command...",
		usercolor: "green",
		atcolor: "gray",
		hostcolor: "magenta",
		promptcolor: "magenta",
		promptsymbol: "❯",
		caretcolor: "green",
		selectionbg: "#e8b195",
		selectionfg: "#16161e"
	},
	colors: {
		white: "#e2e2e2",
		gray: "#97989d",
		black: "#16161e",
		red: "#ec6183",
		green: "#2ed8a2",
		yellow: "#e8b195",
		blue: "#2bc3de",
		cyan: "#62e0e2",
		magenta: "#e069aa",
		purple: "#d1aff8"
	},
	nfetch: {
		timeformat: "HH:mm",
		dateformat: "DD/MM/YYYY",
		titlecolor: "yellow"
	},
	search: {
		default: "https://google.com/search?q=",
		target: "_self"
	},
	url: {
		target: "_self"
	},
	commands: [
		{
			alias: "g",
			name: "Google Search",
			url: "https://google.com/search?q={}"
		},
		{
			alias: "d",
			name: "DuckDuckGo Search",
			url: "https://duckduckgo.com/?q={}"
		},
		{
			alias: "b",
			name: "Brave Search",
			url: "https://search.brave.com/search?q={}"
		},
		{
			alias: "gh",
			name: "Github Search",
			url: "https://github.com/search?q={}"
		},
		{
			alias: "s",
			name: "Stack Overflow Search",
			url: "https://stackoverflow.com/search?q={}"
		},
		{
			alias: "w",
			name: "Wikipedia Search",
			url: "https://en.wikipedia.org/wiki/{}"
		}
	],
	sections: [
		{
			title: "General",
			color: "green",
			links: [
				{
					name: "YouTube",
					url: "https://youtube.com",
					icon: "bi:youtube",
					target: "_blank"
				},
				{
					name: "Discord",
					url: "discord.com",
					icon: "ic:baseline-discord",
					target: "_blank"
				},
				{
					name: "GPT",
					url: "https://chat.openai.com/",
					icon: "simple-icons:openai",
					target: "_blank"
				},
				{
					name: "Reddit",
					url: "https://reddit.com",
					icon: "ic:baseline-reddit",
					target: "_blank"
				}
			]
		},
		{
			title: "Dev",
			color: "magenta",
			links: [
				{
					name: "GitHub",
					url: "https://github.com",
					icon: "mdi:github",
					target: "_blank"
				},
				{
					name: "Stack Overflow",
					url: "https://stackoverflow.com/",
					icon: "mdi:stack-overflow",
					target: "_blank"
				}
			]
		},
		{
			title: "Social",
			color: "purple",
			links: [
				{
					name: "Twitter",
					url: "https://twitter.com",
					icon: "mdi:twitter",
					target: "_blank"
				},
				{
					name: "Reddit",
					url: "https://reddit.com",
					icon: "mdi:reddit",
					target: "_blank"
				}
			]
		},
		{
			title: "Gaming",
			color: "cyan",
			links: [
				{
					name: "Steam",
					url: "https://steampowered.com",
					icon: "bi:steam",
					target: "_blank"
				}
			]
		},
		{
			title: "Science",
			color: "blue",
			links: [
				{
					name: "Space",
					url: "fa6-solid:user-astronaut",
					icon: "mdi:reddit",
					target: "_blank"
				},
				{
					name: "NASA",
					url: "https://blogs.nasa.gov/",
					icon: "simple-icons:nasa",
					target: "_blank"
				},
				{
					name: "ESA",
					url: "https://blogs.esa.int/",
					icon: "mdi:black-mesa",
					target: "_blank"
				}
			]
		},
		{
			title: "Tech",
			color: "yellow",
			links: [
				{
					name: "Google",
					url: "https://google.com/",
					icon: "ion:logo-google",
					target: "_blank"
				}
			]
		}
	]
}

module.exports = config
