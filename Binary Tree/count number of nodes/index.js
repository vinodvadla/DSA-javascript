var countNodes = function(root) {
    let ans=0;
    preorder(root)
    return ans
function preorder(root){
    if(root===null){
        return 
    }else{
        ans++
        preorder(root.left);
        preorder(root.right)
    }
}
};