
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ProblemForm = () => {
  const [problem, setProblem] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!problem.trim()) return;
    
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Problem Submitted Successfully!",
        description: "We'll help you get out of this situation. Check your email for next steps.",
      });
      
      setProblem('');
    }, 2000);
  };

  return (
    <Card className="w-full max-w-md bg-white shadow-xl border-0">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl font-semibold text-gray-800">
          What problem can we help with?
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            placeholder="Describe your situation in detail..."
            required
            rows={6}
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
          />

          <Button
            type="submit"
            disabled={isSubmitting || !problem.trim()}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                <span>Submitting...</span>
              </div>
            ) : (
              'Get Me Outta This!'
            )}
          </Button>
          <div className="mt-6 p-4 bg-gray-50 border-2 border-gray-300 rounded">
            <div className="font-semibold mb-2"> Answer </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProblemForm;
