func twoSum(nums []int, target int) []int {
    
    myMap := make(map[int]int)
    
    for idx, num := range nums {
        
        if v, found := myMap[target - num]; found { return []int{v,idx} }
        
        myMap[num] = idx
        
    }
    
    return nil
    
}