import { ChevronRightIcon } from '@heroicons/react/solid';
import { BookOpenIcon, ChatAlt2Icon, ViewListIcon } from '@heroicons/react/outline';

const links = [
  {
    title: 'Documentation',
    description: 'Learn how to integrate our tools with your app',
    icon: BookOpenIcon,
  },
  {
    title: 'API Reference',
    description: 'A complete API reference for our libraries',
    icon: ViewListIcon,
  },
  {
    title: 'Slack',
    description: 'Keep up with out community',
    icon: ChatAlt2Icon,
  },
];

export function Custom404(): JSX.Element {
  return (
    <div className="bg-white">
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl py-16 sm:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              This page does not exist.
            </h1>
            <p className="mt-2 text-lg text-gray-500">
              The page you are looking for could not be found.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Popular pages
            </h2>
            <ul className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
              {links.map((link, linkIdx) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={linkIdx} className="relative flex items-start space-x-4 py-6">
                  <div className="flex-shrink-0">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
                      <link.icon className="h-6 w-6 text-indigo-700" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-medium text-gray-900">
                      <span className="rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
                        <a href="#" className="focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true" />
                          {link.title}
                        </a>
                      </span>
                    </h3>
                    <p className="text-base text-gray-500">{link.description}</p>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                Or go back home<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Custom404;
