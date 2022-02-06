/* This example requires Tailwind CSS v2.0+ */
import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Full controll',
    description:
      'Records are permanently stored on blockchain, so no one can change them',
    icon: GlobeAltIcon,
  },
  {
    name: 'For Any events',
    description:
      'Meeting with your business colleage, friend or great persobality',
    icon: ScaleIcon,
  },
  {
    name: 'POM is trustable',
    description:
      'POM is only sucessful when the guest confirms the happening of event created by the host ',
    icon: LightningBoltIcon,
  },
]

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">A better way to send money.</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-b from-logocyan to-logopink text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true"/>
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}