import React from 'react'
import { Button } from './ui/Button'
import { TrendingUp, ShieldCheck, BarChart3 } from 'lucide-react'
export function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-50/50 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-50/30 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6 animate-fade-in-up">
            <TrendingUp className="w-4 h-4 mr-2" />
            Qusudi | GTM Strategy & Revenue Architecture for B2B SaaS and AI Founders
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
            Your GTM Is Still Running Through You. <span className="text-blue-600">Let's Fix That.</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            I work with technical and product-focused founders of B2B SaaS companies between $1M and $7M ARR who've validated product-market fit — but are still personally closing every deal because no GTM system exists to replace them. 
            Every engagement starts with a diagnostic, not a playbook. I find where your revenue system is breaking, then co-build the fix.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              variant="primary" 
              size="lg" 
              withArrow
              href="https://calendly.com/cchuaga-qusudiconsulting/1-1-coffee-chats"
              className="w-full sm:w-auto"
            >
              Take a Free GTM Assessment
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              href="https://calendly.com/cchuaga-qusudiconsulting"
              className="w-full sm:w-auto"
            >
              Schedule a Call
            </Button>
          </div>
          {/* Trust Indicators */}
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <ShieldCheck className="w-5 h-5 text-emerald-500 mr-2" />
              <span>Proven Methodologies</span>
            </div>
            <div className="flex items-center">
              <BarChart3 className="w-5 h-5 text-blue-500 mr-2" />
              <span>Data-Driven Strategy</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 text-gray-900 mr-2" />
              <span>Sustainable Growth</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
