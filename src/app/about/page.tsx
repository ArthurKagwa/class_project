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
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-rose-100/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              About Sweet Bliss
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Sweet Bliss Bakery Enterprise is a partnership business with 8 members, established on March 2nd, 2025.
              We are licensed under the Uganda Registration Service Bureau (URSB).
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12"
          >
            <div className="relative lg:order-last lg:col-span-5">
              <figure className="border-l border-rose-600 pl-8">
                <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                  <p>&ldquo;Our passion for baking is matched only by our commitment to quality and customer satisfaction.&rdquo;</p>
                </blockquote>
                <figcaption className="mt-8 flex gap-x-4">
                  <div className="text-sm leading-6">
                    <strong className="font-semibold text-gray-900">Sweet Bliss Team</strong>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="lg:col-span-7">
              <Image
                src="/images/bakery-team.jpg"
                alt="Sweet Bliss Bakery Team"
                width={800}
                height={400}
                className="rounded-2xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-base font-semibold leading-7 text-rose-600"
            >
              Our Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              What drives us forward
            </motion.p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <dt className="text-3xl mb-4">{value.icon}</dt>
                  <dt className="text-base font-semibold leading-7 text-gray-900">{value.name}</dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-base font-semibold leading-7 text-rose-600"
            >
              Our Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              The Sweet Bliss Story
            </motion.p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <motion.div
                  key={event.date}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-base font-semibold leading-7 text-rose-600"
            >
              Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Meet Our Leadership
            </motion.p>
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
                        <Image
                          src={member.imageUrl}
                          alt={member.name}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover"
                        />
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

      {/* Contact Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in Touch</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              P.O Box 92, Kampala, Uganda<br />
              Customer Help: 0782181005 / 0752235593<br />
              Email: sweetbliss@gmail.com
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  )
} 