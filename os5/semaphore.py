import threading
import time

THREAD_NUM = 4

# Semaphore with a value of 4
semaphore = threading.Semaphore(THREAD_NUM)

def routine(thread_id):
    semaphore.acquire()
    time.sleep(1)  # Simulate work
    print(f"Hello from thread {thread_id}")
    semaphore.release()

def main():
    threads = []

    for i in range(THREAD_NUM):
        t = threading.Thread(target=routine, args=(i,))
        t.start()
        threads.append(t)

    for t in threads:
        t.join()

if __name__ == "__main__":
    main()
