func removeDuplicates(nums []int) []int {
    
    uniques := make(map[int]bool)
    arr := []int{}
    
    for i:= 0; i < len(nums); i++ {
        
      if _, value := uniques[nums[i]]; !value {
            uniques[nums[i]] = true
            arr = append(arr, nums[i])
        }
        
    }

     return arr
}
