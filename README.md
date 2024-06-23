# Calories Counter App

This project is designed to estimate the number of calories in a meal from an image. It uses the OpenAI GPT-3.5-turbo model to analyze the image and provide calorie information in a structured JSON format.

# Requirements
Python 3.7+
openai Python package
python-dotenv Python package

# Setup

$ git clone https://github.com/your-repo/calories-counter.git
cd calories-counter

# Create and activate a virtual environment:
    python -m venv myenv
    myenv\Scripts\activate  # On Windows
    //source myenv/bin/activate  // On macOS/Linux
	
# Install dependencies:
   pip install openai python-dotenv


# Set up your OpenAI API key:
    OPENAI_API_KEY=your-api-key-here
	
# Usage
    python app.py
