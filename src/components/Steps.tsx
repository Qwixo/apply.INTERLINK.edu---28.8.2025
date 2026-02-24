import { motion } from 'framer-motion'
import { GraduationCap, FileText, DollarSign, Plane, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: GraduationCap,
    title: 'Choose Your Program',
    description: 'Research and select the perfect university and program that matches your goals and interests.'
  },
  {
    number: 2,
    icon: FileText,
    title: 'Prepare Documents',
    description: 'Gather all necessary documents including transcripts, test scores, and recommendation letters.'
  },
  {
    number: 3,
    icon: DollarSign,
    title: 'Secure Funding',
    description: 'Explore scholarships, financial aid options, and funding opportunities for your education.'
  },
  {
    number: 4,
    icon: Plane,
    title: 'Apply for Visa',
    description: 'Complete your visa application process and prepare for your student visa interview.'
  },
  {
    number: 5,
    icon: CheckCircle,
    title: 'Start Your Journey',
    description: 'Finalize travel plans, arrange accommodation, and prepare for your exciting new chapter.'
  }
]

export default function Steps() {
  return (
    <section id="steps" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16"
        >
          Your Path to Success
        </motion.h2>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl bg-slate-50 hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {step.number}
              </div>

              <div className="flex-shrink-0">
                <step.icon className="w-12 h-12 text-blue-600" />
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-lg">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
