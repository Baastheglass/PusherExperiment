from langchain_ollama import OllamaLLM

def answer(query):
    print(f"Received query: {query}")
    llm = OllamaLLM(model="llama3:8b", temperature=0.1, max_tokens=512)
    response = llm.invoke(query)
    return response

if __name__ == "__main__":
    query = "What is the capital of France?"
    response = answer(query)
    print(f"Query: {query}\nResponse: {response}")
