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
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Vision
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    To become the leading bakery in Uganda up to date and customer friendly bakery services
                  </p>
                </dd>
                <div className="mt-8">
                  <Image
                    src="/images/bakery-interior.jpg"
                    alt="Bakery Interior"
                    width={600}
                    height={400}
                    className="rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Mission
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    To provide our customers with exceptional baked goods that exceed their expectations in taste, quality and presentation
                  </p>
                </dd>
                <div className="mt-8">
                  <Image
                    src="/images/bakery-baking.jpg"
                    alt="Baking Process"
                    width={600}
                    height={400}
                    className="rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </dl>
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