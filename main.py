"""
from openai import OpenAI

client =OpenAI(api_key=os.environ["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"],)

completion = client.completions.create(model='curie')
print(completion.choices[0].text)
print(dict(completion).get('usage'))
print(completion.model_dump_json(indent=2))
"""