import React, { useState } from 'react';

const ProductivityCalendar = () => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [expandedDay, setExpandedDay] = useState(null);
  const [contextInput, setContextInput] = useState('');
  const [showContextForm, setShowContextForm] = useState(false);
  
  // Updated color codes - softened by ~30%
  const colors = {
    // Original: #99d2ed, #ffb8bc, #bddaa0
    // Softened by adding opacity/lightening
    blue: '#c4e3f2',    // Softened pastel blue
    pink: '#ffd6d8',    // Softened pastel pink
    green: '#d9eac6',   // Softened pastel green
    yellow: '#fce38b',  // Pastel yellow for background
  };
  
  const dayTypes = {
    focusDay: {
      color: `bg-${colors.blue} border-${colors.blue}`,
      title: 'Focus Day',
      description: 'Dedicated work day with structured blocks for maximum productivity'
    },
    caregivingDay: {
      color: `bg-${colors.pink} border-${colors.pink}`,
      title: 'Caregiving Day',
      description: 'Days with your daughter - with strategic micro-productivity moments'
    },
    weekendDay: {
      color: `bg-${colors.green} border-${colors.green}`,
      title: 'Weekend Day',
      description: 'Balance between rest, family time, and light preparation for the week'
    }
  };
  
  const weekSchedule = [
    {
      day: 'Monday',
      type: 'focusDay',
      blocks: [
        { time: '6:00-6:45', activity: 'Morning Routine & Physical Fitness', details: 'Stretching (10 min), Dumbbell exercises focusing on arms/chest (20 min), Quick shower (15 min)' },
        { time: '6:45-7:30', activity: 'Mindful Breakfast & Learning Pod', details: 'Listen to marketing podcast while eating breakfast, review day\'s schedule and priorities' },
        { time: '7:30-8:30', activity: 'Family Time', details: 'Quality time with daughter before work day begins' },
        { time: '8:30-9:00', activity: 'Weekly Planning & Review', details: 'Review previous week\'s achievements, set concrete goals for current week' },
        { time: '9:00-10:30', activity: 'Deep Work: Skill Building', details: 'Focus on learning one specific marketing skill (e.g., SEO, content strategy, social media analytics)' },
        { time: '10:30-10:45', activity: 'Movement Break', details: '15-minute walk, light stretching, or quick physical activity' },
        { time: '10:45-12:15', activity: 'Marketing Research & Notes', details: 'Research current trends, make structured notes using Bear Hunter System, identify case studies to reference' },
        { time: '12:15-13:00', activity: 'Lunch & Light Learning', details: 'Eat while watching a relevant TED talk or industry presentation' },
        { time: '13:00-14:30', activity: 'Deep Work: Job Search / Client Acquisition', details: 'Mon: Research companies and tailor 2 CVs/applications, reach out to 5 network contacts' },
        { time: '14:30-14:45', activity: 'Second Movement Break', details: 'Quick physical movement to refresh focus' },
        { time: '14:45-16:00', activity: 'Website & Portfolio Building', details: 'Work on Funk3000 consultancy website, create content showcasing expertise' },
        { time: '16:00-16:30', activity: 'Reflection & Planning', details: 'Journal accomplishments, prepare task list for tomorrow, active recall of day\'s learning' }
      ]
    },
    {
      day: 'Tuesday',
      type: 'focusDay',
      blocks: [
        { time: '6:00-6:45', activity: 'Morning Routine & Physical Fitness', details: 'Stretching (10 min), Dumbbell exercises focusing on arms/chest (20 min), Quick shower (15 min)' },
        { time: '6:45-7:30', activity: 'Mindful Breakfast & Learning Pod', details: 'Read an industry article while eating, review day\'s schedule' },
        { time: '7:30-8:30', activity: 'Family Time', details: 'Quality time with daughter before work day begins' },
        { time: '8:30-9:00', activity: 'Day Planning & Active Recall', details: 'Brief retrieval practice of yesterday\'s learning, set today\'s priorities' },
        { time: '9:00-10:30', activity: 'Deep Work: Consultancy Development', details: 'Define Funk3000 services, USP, and target market analysis' },
        { time: '10:30-10:45', activity: 'Movement Break', details: '15-minute walk, light stretching, or quick physical activity' },
        { time: '10:45-12:15', activity: 'Case Study Development', details: 'Create theoretical case studies showing marketing transformations you could deliver' },
        { time: '12:15-13:00', activity: 'Lunch & Light Learning', details: 'Listen to business/marketing podcast' },
        { time: '13:00-14:30', activity: 'Deep Work: Content Creation', details: 'Create 1-2 thought leadership pieces for LinkedIn/blog to establish authority' },
        { time: '14:30-14:45', activity: 'Second Movement Break', details: 'Quick physical movement to refresh focus' },
        { time: '14:45-16:00', activity: 'Networking & Outreach', details: 'Contact 3-5 potential clients or partners, engage in relevant industry conversations online' },
        { time: '16:00-16:30', activity: 'Reflection & Planning', details: 'Journal accomplishments, prepare task list for tomorrow, active recall of day\'s learning' }
      ]
    },
    {
      day: 'Wednesday',
      type: 'caregivingDay',
      blocks: [
        { time: '6:00-6:30', activity: 'Quick Morning Fitness', details: 'Abbreviated stretching and light dumbbell exercises (15 min), quick shower (15 min)' },
        { time: '6:30-7:00', activity: 'Mindful Breakfast & Mental Prep', details: 'Brief industry article/video while eating, mentally plan caregiving day' },
        { time: 'During nap time', activity: 'Micro-productivity Session', details: '30-45 min: Review 1 job application or send 2-3 networking messages' },
        { time: 'While playing', activity: 'Learning Pod', details: 'Listen to marketing podcast during appropriate play activities' },
        { time: 'Evening', activity: 'Brief Review', details: '15 min: Active recall of recent learning, quick planning for tomorrow' }
      ]
    },
    {
      day: 'Thursday',
      type: 'caregivingDay',
      blocks: [
        { time: '6:00-6:30', activity: 'Quick Morning Fitness', details: 'Abbreviated stretching and light dumbbell exercises (15 min), quick shower (15 min)' },
        { time: '6:30-7:00', activity: 'Mindful Breakfast & Mental Prep', details: 'Brief industry article/video while eating, mentally plan caregiving day' },
        { time: 'During nap time', activity: 'Micro-productivity Session', details: '30-45 min: Review/update Funk3000 website or create brief content piece' },
        { time: 'While playing', activity: 'Learning Pod', details: 'Listen to business strategy audiobook during appropriate play activities' },
        { time: 'Evening', activity: 'Brief Review', details: '15 min: Active recall of recent learning, quick planning for tomorrow' }
      ]
    },
    {
      day: 'Friday',
      type: 'focusDay',
      blocks: [
        { time: '6:00-6:45', activity: 'Morning Routine & Physical Fitness', details: 'Stretching (10 min), Dumbbell exercises focusing on arms/chest (20 min), Quick shower (15 min)' },
        { time: '6:45-7:30', activity: 'Mindful Breakfast & Learning Pod', details: 'Review weekly marketing newsletter while eating, plan day' },
        { time: '7:30-8:30', activity: 'Family Time', details: 'Quality time with daughter before work day begins' },
        { time: '8:30-9:00', activity: 'Weekly Progress Review', details: 'Evaluate week\'s achievements, identify gaps and needed adjustments' },
        { time: '9:00-10:30', activity: 'Deep Work: Job Applications', details: 'Finish and submit 2-3 tailored job applications for Marketing/Brand Director roles' },
        { time: '10:30-10:45', activity: 'Movement Break', details: '15-minute walk, light stretching, or quick physical activity' },
        { time: '10:45-12:15', activity: 'Skills Practice & Portfolio Building', details: 'Practical application of a key marketing skill, add to portfolio' },
        { time: '12:15-13:00', activity: 'Lunch & Light Learning', details: 'Review industry news or case studies' },
        { time: '13:00-14:30', activity: 'Deep Work: Client Pitch Development', details: 'Create 1-2 targeted pitches for potential Funk3000 clients' },
        { time: '14:30-14:45', activity: 'Second Movement Break', details: 'Quick physical movement to refresh focus' },
        { time: '14:45-16:00', activity: 'Follow-ups & Network Building', details: 'Follow up on applications/pitches sent this week, engage with professional network' },
        { time: '16:00-16:30', activity: 'Weekly Reflection & Weekend Planning', details: 'Document week\'s progress, celebrate wins, set light weekend goals' }
      ]
    },
    {
      day: 'Saturday',
      type: 'weekendDay',
      blocks: [
        { time: 'Morning', activity: 'Extended Physical Activity', details: 'Longer workout session focusing on both strength and cardio (30-45 min)' },
        { time: 'Afternoon', activity: 'Low-pressure Learning', details: 'Read marketing book or article collection for 30-45 minutes' },
        { time: 'Evening', activity: 'Weekly Review', details: 'Informal 20-min review of key learning points from the week' }
      ]
    },
    {
      day: 'Sunday',
      type: 'weekendDay',
      blocks: [
        { time: 'Morning', activity: 'Light Physical Activity', details: 'Stretching or brief workout (20 min)' },
        { time: 'Afternoon', activity: 'Week Preparation', details: 'Set 2-3 primary goals for upcoming week, review calendar (30 min)' },
        { time: 'Evening', activity: 'Mental Preparation', details: 'Brief meditation or visualization of productive upcoming week (10 min)' }
      ]
    }
  ];
  
  const implementationTips = [
    {
      title: "Starting Small for ADHD Management",
      content: "Begin with implementing just one time block per day for the first week. Gradually increase as habits form. The morning fitness routine is an excellent anchor habit to start with."
    },
    {
      title: "Active Recall Implementation",
      content: "After each learning session, take 5 minutes to write down key points without looking at your notes. This simple practice dramatically improves retention according to the learning science in your document."
    },
    {
      title: "Overcoming Inaction",
      content: "Use the '2-minute rule' from Atomic Habits - if something takes less than 2 minutes, do it immediately. For larger tasks, commit to just 2 minutes of work to overcome the initial resistance."
    },
    {
      title: "Managing Cognitive Load",
      content: "When learning new marketing concepts, break them into smaller chunks. Focus on understanding one concept deeply rather than skimming many superficially."
    },
    {
      title: "Environmental Design",
      content: "Create a dedicated workspace free from distractions. Use visual cues (like a specific notebook or desktop background) to trigger 'work mode' for your brain."
    },
    {
      title: "Bear Hunter System for Notes",
      content: "Structure your marketing research notes as Questions → Core Concepts → Connections. Review these notes using spaced repetition (review after 1 day, 3 days, 1 week)."
    },
    {
      title: "Progress Tracking",
      content: "Keep a simple 'wins journal' to document daily achievements, no matter how small. This creates visual progress and builds momentum."
    }
  ];
  
  const learningResources = [
    {
      category: "Marketing & Brand Strategy",
      resources: [
        { name: "Marketing Over Coffee Podcast", link: "https://www.marketingovercoffee.com/" },
        { name: "Harvard Business Review - Marketing Articles", link: "https://hbr.org/topic/marketing" },
        { name: "Think with Google", link: "https://www.thinkwithgoogle.com/" },
        { name: "Seth Godin's Blog", link: "https://seths.blog/" },
        { name: "Marketing Profs", link: "https://www.marketingprofs.com/" }
      ]
    },
    {
      category: "Job Search & Personal Branding",
      resources: [
        { name: "Harvard Business Review - Personal Branding Guide", link: "https://hbr.org/2020/03/build-a-personal-brand-that-showcases-your-strengths" },
        { name: "LinkedIn Learning - Job Search Strategies", link: "https://www.linkedin.com/learning/topics/job-searching" },
        { name: "The Muse - Career Advice", link: "https://www.themuse.com/advice" },
        { name: "Cultivated Culture - Advanced Job Search Strategies", link: "https://cultivatedculture.com/resources/" }
      ]
    },
    {
      category: "Productivity & ADHD Management",
      resources: [
        { name: "How to ADHD YouTube Channel", link: "https://www.youtube.com/c/HowtoADHD" },
        { name: "Pomodoro Timer App", link: "https://pomofocus.io/" },
        { name: "Focusmate - Accountability Partner Service", link: "https://www.focusmate.com/" },
        { name: "Notion Templates for ADHD", link: "https://www.notion.so/templates/categories/productivity" }
      ]
    }
  ];
  
  const toggleExpandDay = (day) => {
    if (expandedDay === day) {
      setExpandedDay(null);
    } else {
      setExpandedDay(day);
    }
  };
  
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 rounded-lg shadow-md" style={{backgroundColor: colors.yellow, fontFamily: 'Poppins, sans-serif'}}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
          
          body, button, input, textarea, select {
            font-family: 'Poppins', sans-serif;
          }
          
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
          }
        `}
      </style>
      
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold mb-1" style={{fontFamily: 'Poppins, sans-serif', fontWeight: 700}}>Herman</h1>
        <p className="text-xl">The Productivity Calendar</p>
        <div className="mt-4">
          <button 
            onClick={() => setShowContextForm(!showContextForm)}
            className="px-4 py-2 rounded text-white bg-gray-700"
            style={{fontFamily: 'Poppins, sans-serif'}}
          >
            {showContextForm ? 'Hide Context Form' : 'Talk to Herman'}
          </button>
        </div>
      </div>
      
      {showContextForm && (
        <div className="mb-6 p-4 rounded-lg border" style={{backgroundColor: colors.pink, borderColor: '#d4d4d4'}}>
          <h3 className="font-bold mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>Tell Herman about your schedule</h3>
          <textarea
            className="w-full p-3 border rounded mb-3"
            rows="3"
            placeholder="Example: I'm awake with my daughter from 6am-8:30am taking her to nursery, so I can't do morning workouts until 9am."
            value={contextInput}
            onChange={(e) => setContextInput(e.target.value)}
            style={{fontFamily: 'Poppins, sans-serif'}}
          ></textarea>
          <div className="flex justify-end">
            <button 
              className="px-4 py-2 rounded text-white bg-gray-700"
              style={{fontFamily: 'Poppins, sans-serif'}}
              onClick={() => {
                alert("Herman says: Thanks for sharing! I've noted that you're busy with your daughter from 6am-8:30am. I'll update your schedule accordingly.");
                setShowContextForm(false);
              }}
            >
              Update My Schedule
            </button>
          </div>
        </div>
      )}
      
      <div className="mb-6">
        <ul className="flex flex-wrap border-b border-gray-200">
          <li className="mr-2">
            <button
              className={`inline-block p-4 rounded-t-lg ${selectedTab === 'overview' ? 'bg-white border-gray-200 border-b-0 text-blue-600' : 'bg-gray-100 text-gray-500 hover:text-gray-600'}`}
              style={{
                color: selectedTab === 'overview' ? '#1e88e5' : '',
                fontFamily: 'Poppins, sans-serif'
              }}
              onClick={() => setSelectedTab('overview')}
            >
              Weekly Overview
            </button>
          </li>
          <li className="mr-2">
            <button
              className={`inline-block p-4 rounded-t-lg ${selectedTab === 'implementation' ? 'bg-white border-gray-200 border-b-0 text-blue-600' : 'bg-gray-100 text-gray-500 hover:text-gray-600'}`}
              style={{
                color: selectedTab === 'implementation' ? '#1e88e5' : '',
                fontFamily: 'Poppins, sans-serif'
              }}
              onClick={() => setSelectedTab('implementation')}
            >
              Implementation Tips
            </button>
          </li>
          <li className="mr-2">
            <button
              className={`inline-block p-4 rounded-t-lg ${selectedTab === 'resources' ? 'bg-white border-gray-200 border-b-0 text-blue-600' : 'bg-gray-100 text-gray-500 hover:text-gray-600'}`}
              style={{
                color: selectedTab === 'resources' ? '#1e88e5' : '',
                fontFamily: 'Poppins, sans-serif'
              }}
              onClick={() => setSelectedTab('resources')}
            >
              Learning Resources
            </button>
          </li>
        </ul>
      </div>
      
      {selectedTab === 'overview' && (
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="flex items-center px-3 py-1 rounded-full" style={{backgroundColor: colors.blue, fontFamily: 'Poppins, sans-serif'}}>
              <span className="text-sm font-medium">Focus Day</span>
            </div>
            <div className="flex items-center px-3 py-1 rounded-full" style={{backgroundColor: colors.pink, fontFamily: 'Poppins, sans-serif'}}>
              <span className="text-sm font-medium">Caregiving Day</span>
            </div>
            <div className="flex items-center px-3 py-1 rounded-full" style={{backgroundColor: colors.green, fontFamily: 'Poppins, sans-serif'}}>
              <span className="text-sm font-medium">Weekend Day</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {weekSchedule.map((daySchedule) => {
              // Determine the background color based on day type
              let bgColor = colors.blue; // Default to blue
              if (daySchedule.type === 'caregivingDay') bgColor = colors.pink;
              if (daySchedule.type === 'weekendDay') bgColor = colors.green;
              
              return (
                <div 
                  key={daySchedule.day} 
                  className="border rounded-lg overflow-hidden"
                  style={{
                    borderColor: bgColor,
                    backgroundColor: bgColor, // Always have the background color, not just when expanded
                  }}
                >
                  <div 
                    className="p-4 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleExpandDay(daySchedule.day)}
                  >
                    <div>
                      <h2 className="text-xl font-bold" style={{fontFamily: 'Poppins, sans-serif', fontWeight: 700}}>{daySchedule.day}</h2>
                      <p className="text-sm text-gray-600" style={{fontFamily: 'Poppins, sans-serif'}}>{dayTypes[daySchedule.type].title}</p>
                    </div>
                    <span className="text-xl">{expandedDay === daySchedule.day ? '−' : '+'}</span>
                  </div>
                  
                  {expandedDay === daySchedule.day && (
                    <div className="bg-white p-4 border-t" style={{borderColor: bgColor}}>
                      <div className="grid grid-cols-1 gap-3">
                        {daySchedule.blocks.map((block, index) => (
                          <div key={index} className="border rounded p-3 bg-gray-50">
                            <div className="flex justify-between">
                              <h3 className="font-bold" style={{fontFamily: 'Poppins, sans-serif', fontWeight: 700}}>{block.activity}</h3>
                              <span className="text-sm text-gray-500" style={{fontFamily: 'Poppins, sans-serif'}}>{block.time}</span>
                            </div>
                            <p className="text-sm mt-1" style={{fontFamily: 'Poppins, sans-serif'}}>{block.details}</p>
                            <div className="mt-2">
                              <button
                                className="px-2 py-1 rounded text-white text-xs bg-blue-600"
                                style={{fontFamily: 'Poppins, sans-serif'}}
                                onClick={() => alert(`Herman would generate a personalized learning module for "${block.activity}" tailored to your ADHD learning style and available time.`)}
                              >
                                Generate Learning Module →
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
      
      {selectedTab === 'implementation' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {implementationTips.map((tip, index) => (
            <div key={index} className="border rounded-lg p-4 bg-white shadow-sm" style={{borderLeftWidth: '4px', borderLeftColor: colors.pink}}>
              <h3 className="font-bold text-lg mb-2" style={{fontFamily: 'Poppins, sans-serif', fontWeight: 700}}>{tip.title}</h3>
              <p style={{fontFamily: 'Poppins, sans-serif'}}>{tip.content}</p>
            </div>
          ))}
        </div>
      )}
      
      {selectedTab === 'resources' && (
        <div>
          {learningResources.map((category, index) => (
            <div key={index} className="mb-6">
              <h3 className="font-bold text-xl mb-3" style={{fontFamily: 'Poppins, sans-serif', fontWeight: 700}}>{category.category}</h3>
              <div className="bg-white rounded-lg border p-4" style={{borderColor: colors.green}}>
                <ul className="space-y-2">
                  {category.resources.map((resource, rIndex) => (
                    <li key={rIndex} style={{fontFamily: 'Poppins, sans-serif'}}>
                      <a 
                        href={resource.link} 
                        className="text-blue-600 hover:underline"
                        style={{fontFamily: 'Poppins, sans-serif'}}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {resource.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductivityCalendar;