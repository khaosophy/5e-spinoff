import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Rules',
					items: [
						{ label: 'Adventuring', link: '/rules/adventuring/' },
						{ label: 'Ability Scores', link: '/rules/using-ability-scores/' },
						{ label: 'Combat', link: '/rules/combat/' },
						{ label: 'Spellcasting', link: '/rules/spellcasting/' },
						{ label: 'Equipment', link: '/rules/equipment/' },
						{ label: 'Appendix', link: '/rules/appendix/' },
					]
				},
				{
					label: 'Backgrounds',
					autogenerate: { directory: 'backgrounds' },
				},
				{
					label: 'Races',
					autogenerate: { directory: 'races' },
				},
				{
					label: 'Classes',
					autogenerate: { directory: 'classes' },
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
