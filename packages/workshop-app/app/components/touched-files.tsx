import * as Popover from '@radix-ui/react-popover'
import Icon from './icons'

function TouchedFiles({ children }: { children: React.ReactElement }) {
	return (
		<>
			<Popover.Root>
				<Popover.Trigger asChild>
					<button
						className="flex h-full items-center gap-1 border-r border-gray-200 px-6 py-3 font-mono text-sm uppercase"
						aria-label="Relevant Files"
					>
						<Icon name="Files" />
						Files
					</button>
				</Popover.Trigger>
				<Popover.Portal>
					<Popover.Content
						className="mx-10 rounded bg-black px-10 py-8 text-white"
						sideOffset={5}
					>
						<strong className="inline-block pb-4 font-semibold uppercase">
							Relevant Files
						</strong>
						{children}
					</Popover.Content>
				</Popover.Portal>
			</Popover.Root>
		</>
	)
}

export default TouchedFiles
