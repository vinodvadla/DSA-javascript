class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class Bt{
   index=-1
    buildtree(arr){
        this.index++;
        if(arr[this.index]===-1){
            return null
        }
        let node=new Node(arr[this.index]);
        node.left=this.buildtree(arr);
        node.right=this.buildtree(arr);
        return node
    }

   
}

let brt=new Bt();
let root=brt.buildtree([1,2,4,-1,-1,5,-1,-1,3,-1,6,-1,-1])
console.log(root)
console.log(preorderTraversal(root))
console.log(inorderTraversal(root))
console.log(postorderTraversal(root))

// preorder traversal
function preorderTraversal(root){
    let ans=[];
    preorder(root);
    return ans
    function preorder(root){

        if(root===null){
            return
        }
        ans.push(root.data)
        preorder(root.left)
        preorder(root.right)
    }

}



// Inorder traversal
function inorderTraversal(root){
    let ans=[];
    inorder(root)
    return ans;

    function inorder(root){
        if(root===null){
            return;
        }else{
            inorder(root.left);
            ans.push(root.data);
            inorder(root.right)
        }
    }
}


// Postorder traversal
function postorderTraversal(root) {
    let ans=[];
    postorder(root);
    return ans
    function postorder(root){
        if(root===null){
            return
        }else{
            postorder(root.left);
            postorder(root.right);
            ans.push(root.data)
        }
    }
    };


    

