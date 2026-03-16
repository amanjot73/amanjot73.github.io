import { Terminal, Github, Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useState, useEffect } from 'react';

const codingActivities = [
  {
    icon: Terminal,
    title: 'Daily DSA Practice',
    description: 'Regular practice on data structures and algorithms including arrays, linked lists, trees, graphs, dynamic programming, and greedy algorithms.'
  },
  {
    icon: Code,
    title: 'Algorithm Implementation',
    description: 'Writing efficient solutions for complex problems. Focus on time and space complexity optimization using C++ and Python.'
  },
  {
    icon: Github,
    title: 'Version Control',
    description: 'All coding work tracked on GitHub with clean commits. Building a strong portfolio of problem-solving and project contributions.'
  }
];

const codeSnippets = [
  {
    title: 'Finding Second Maximum',
    description: 'Finding the second largest element in a vector',
    code: `#include<bits/stdc++.h>
using namespace std;
int main() {
    vector<int>vec = {-4,-2,-11,-3,-5};
    int max1  = INT_MIN;
    int max2 = INT_MIN;
    for(auto &i : vec){
        if(i>max1){
            max2 = max1;
            max1 = i;
        }
        else if(i>max2 && i!=max1){
            max2 = i;
        }
    }
    cout<<max2;
}`
  },
  {
    title: 'Finding Duplicates',
    description: 'Finding duplicate elements in an array',
    code: `#include<bits/stdc++.h>
using namespace std;
void duplicate(int arr[] ,int size){
    vector<int> result;
    for(int i=0;i<size;i++){
        int index = abs(arr[i]) -1;
        if(arr[index]<0){
            result.push_back(abs(arr[i]));
        }
        else{
            arr[index] = -(arr[index]);
        }
    }
    for(int i=0;i<result.size();i++){
        cout<<result[i]<<" ";
    }
}`
  },
  {
    title: 'Move Zeros',
    description: 'Moving all zeros to the beginning of array',
    code: `#include<bits/stdc++.h>
using namespace std;
void move(int arr[],int size){
    for(int i=1;i<size;i++){
        int temp= arr[i];
        int j = i-1;
        for(j;j>=0;j--){
            if(arr[j]==0){
                arr[j+1] = arr[j];
            }
            else{
                break;
            }
        }
        swap(arr[j+1],temp);
    }
}`
  }
];

export function CodingWork() {
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCodeIndex((prevIndex) => (prevIndex + 1) % codeSnippets.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentSnippet = codeSnippets[currentCodeIndex];

  return (
    <section id="coding" className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 tracking-wide" style={{ fontFamily: 'var(--font-section)' }}>CODING PRACTICE & LOCAL DEVELOPMENT</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Continuous learning through daily coding practice and algorithmic problem solving
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {codingActivities.map((activity, idx) => (
            <Card key={idx} className="border-gray-700 bg-gray-800 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:border-blue-600/50 hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-blue-950 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-900/50">
                  <activity.icon className="w-7 h-7 text-blue-400" />
                </div>
                <CardTitle className="text-xl text-white">{activity.title}</CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">{activity.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="border-gray-700 bg-black text-gray-100 hover:shadow-2xl hover:shadow-green-500/10 transition-shadow">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2 text-xl">
              <Terminal className="w-5 h-5" />
              {currentSnippet.title}
            </CardTitle>
            <CardDescription className="text-gray-500">
              {currentSnippet.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="text-sm overflow-x-auto p-4 bg-gray-950 rounded-lg border border-gray-800">
              <code className="text-green-400">{currentSnippet.code}</code>
            </pre>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-4 text-lg">
            All coding practice and projects are version-controlled and available on GitHub
          </p>
          <a 
            href="https://github.com/amanjot73" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold text-lg transition-colors"
          >
            <Github className="w-5 h-5" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}