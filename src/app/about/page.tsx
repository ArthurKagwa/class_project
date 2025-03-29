"use client"

import Navigation from '@/components/Navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'

const team = [
  {
    name: 'Emojong Derrick',
    role: 'General Manager',
    education: 'Bachelor degree in hospitality management',
    contact: '0782519078',
    email: 'derrickemojong1@gmail.com',
    imageUrl: '/images/team/manager.jpg',
    skills: [
      'Bakery operations management',
      'Team leadership and development',
      'Customer service and relations'
    ]
  }
]

const values = [
  {
    name: 'Quality First',
    description: 'We use only the finest ingredients and maintain strict quality control in all our products.',
    icon: '🌟'
  },
  {
    name: 'Customer Satisfaction',
    description: 'Every customer interaction is an opportunity to exceed expectations and create joy.',
    icon: '😊'
  },
  {
    name: 'Innovation',
    description: 'We continuously explore new recipes and techniques to bring you unique and delicious treats.',
    icon: '💡'
  },
  {
    name: 'Sustainability',
    description: 'Our commitment to environmental responsibility shapes our operations and packaging choices.',
    icon: '🌱'
  }
]

const timeline = [
  {
    date: 'March 2, 2025',
    title: 'Foundation',
    description: 'Sweet Bliss Bakery Enterprise was established as a partnership business with 8 founding members.'
  },
  {
    date: 'March 2025',
    title: 'License Acquisition',
    description: 'Obtained trading license and certification from Uganda Registration Service Bureau (URSB).'
  },
  {
    date: 'April 2025',
    title: 'First Store Opening',
    description: 'Opened our first store in Kampala, bringing fresh baked goods to the community.'
  },
  {
    date: 'May 2025',
    title: 'Delivery Service Launch',
    description: 'Launched our delivery service covering Kampala and the central region.'
  }
]

export default function About() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-rose-100/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-base font-semibold leading-7 text-rose-600">Our Story</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Sweet Bliss Bakery Enterprise
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Founded with a passion for exceptional baking and a commitment to quality, 
                Sweet Bliss has grown from a shared dream to become one of Uganda's most promising bakeries.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Vision & Mission with Images */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-base font-semibold leading-7 text-rose-600">Our Vision</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Leading the Way in Bakery Excellence
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    "To become the leading bakery in Uganda up to date and customer friendly bakery services"
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="lg:pl-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-base font-semibold leading-7 text-rose-600">Our Mission</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Exceeding Expectations
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    "To provide our customers with exceptional baked goods that exceed their expectations 
                    in taste, quality and presentation"
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-rose-600">Our Values</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Drives Us
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {values.map((value) => (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <dt className="text-3xl text-center mb-4">{value.icon}</dt>
                  <dt className="text-base font-semibold leading-7 text-gray-900 text-center">{value.name}</dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 text-center">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-rose-600">Our Journey</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Sweet Bliss Story
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <motion.div
                  key={event.date}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-rose-600" />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{event.date}</p>
                      <p className="mt-2 text-base text-gray-600">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-rose-600">Our Team</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Leadership
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10">
              {team.map((member) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-10 shadow-lg"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                        <div className="w-full h-full bg-gray-200 rounded-lg" />
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="text-base leading-7">
                        <h3 className="font-semibold text-2xl text-gray-900">{member.name}</h3>
                        <p className="text-rose-600 mt-1">{member.role}</p>
                      </div>
                      <div className="mt-6">
                        <dl className="grid grid-cols-1 gap-4 text-sm leading-6">
                          <div>
                            <dt className="font-medium text-gray-900">Education</dt>
                            <dd className="mt-1 text-gray-600">{member.education}</dd>
                          </div>
                          <div>
                            <dt className="font-medium text-gray-900">Contact</dt>
                            <dd className="mt-1 text-gray-600">{member.contact}</dd>
                          </div>
                          <div>
                            <dt className="font-medium text-gray-900">Email</dt>
                            <dd className="mt-1 text-gray-600">{member.email}</dd>
                          </div>
                          <div>
                            <dt className="font-medium text-gray-900">Skills</dt>
                            <dd className="mt-1 text-gray-600">
                              <ul className="list-disc pl-4 space-y-1">
                                {member.skills.map((skill) => (
                                  <li key={skill}>{skill}</li>
                                ))}
                              </ul>
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 