from _heapq import *

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        heap = [];
        for stone in stones:
            heapq.heappush(heap, -1 * stone)

        while len(heap) > 1:
            first = heapq.heappop(heap)
            second = heapq.heappop(heap)
            result = first - second
            print(heap)
            if result < 0:
                heappush(heap, result)
        
        if len(heap) == 0:
            return 0;

        return -1 * heapq.heappop(heap)
        
        