import requests 

def call_open_ai(key, prompt):
    try: 
        url = "https://api.openai.com/v1/chat/completions"
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {key}"
        }
        data = {
            "model": "gpt-4o-mini",
            "messages": [{
                "role": "user", 
                "content": prompt
            }]
        }
        response = requests.post(url, json=data, headers=headers)
        json_api_response = response.json()
        print(json_api_response)
    except Exception as e: 
        print(e)
