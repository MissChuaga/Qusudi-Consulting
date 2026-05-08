import React from 'react';
import { Section } from './ui/Section';
import { Compass, AlertTriangle, Activity } from 'lucide-react';
export function MazeSection() {
  const painPoints = [{
    icon: Compass,
    title: 'You're Still Closing Every Deal Yourself',
    description: "Your product is working. Customers renew. The NPS is good. But deals still run through you personally — because there's no system that generates pipeline without you in it."
  }, {
    icon: Activity,
    title: 'Pipeline Is Unpredictable',
    description: 'You've proven there's a market. But 'proven market' and 'repeatable pipeline' are different things, and right now you only have one of them.'
  }, {
    icon: AlertTriangle,
    title: 'You've Tried Things. Nothing's Stuck',
    description: 'You've got the budget and you've spent it. The problem isn't that you haven't tried — it's that none of it landed because there was no architecture underneath the tactics.'
  }];
  return <Section background="gray">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          The Maze You're Navigating
        </h2>
        <p className="text-lg text-gray-600">
          Your product works. Customers are paying, churning less than they used to, and telling others. The problem isn't the product. It's that your go-to-market is still improvised — and at your stage, that gap is starting to cost you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {painPoints.map((point, index) => <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600">
              <point.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {point.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{point.description}</p>
          </div>)}
      </div>
    </Section>;
}
