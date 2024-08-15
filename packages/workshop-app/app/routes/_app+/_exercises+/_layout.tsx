import { getExercises } from '@epic-web/workshop-utils/apps.server'
import { type SEOHandle } from '@nasa-gcn/remix-seo'
import { Outlet } from '@remix-run/react'
import { serverOnly$ } from 'vite-env-only/macros'

export const handle: SEOHandle = {
	getSitemapEntries: serverOnly$(async (request) => {
		const exercises = await getExercises({ request })
		return exercises.flatMap((e) => [
			{ route: `/${e.exerciseNumber.toString().padStart(2, '0')}` },
			...e.steps.flatMap((s) =>
				['problem', 'solution'].map((type) => ({
					route: `/${e.exerciseNumber.toString().padStart(2, '0')}/${s.stepNumber.toString().padStart(2, '0')}/${type}`,
				})),
			),
			{ route: `/${e.exerciseNumber.toString().padStart(2, '0')}/finished` },
		])
	}),
}

export default function ExercisesLayout() {
	return (
		<div className="flex h-full flex-grow">
			<Outlet />
		</div>
	)
}
