class MyCalendarThree {
  final int N = (int)1e9;
  class Node{
      // 左右子节点
      Node left,right;
      // 节点区间
      int l,r;
      // 区间内的最大重复安排次数
      int maxRepeat;
      // 区间内增加的会议数
      int add;

      public Node(int l,int r){
          this.l = l;
          this.r = r;
      }
  }

  void pushUp(Node p){
      p.maxRepeat = Math.max(p.left.maxRepeat,p.right.maxRepeat);
  }

  void pushDown(Node p){
      int mid = p.l + p.r>>1;
      if(p.left==null) p.left = new Node(p.l,mid);
      if(p.right==null) p.right = new Node(mid+1,p.r);
      if(p.add==0) return;
      p.left.add += p.add;
      p.right.add += p.add;
      p.left.maxRepeat += p.add;
      p.right.maxRepeat += p.add;
      p.add = 0;
  }

  void update(Node p,int l,int r){
      if(l <= p.l && r >= p.r){
          p.maxRepeat += 1;
          p.add += 1;
          return;
      }
      pushDown(p);
      int mid = p.l + p.r>>1;
      if(mid >= l) update(p.left,l,r);
      if(mid < r) update(p.right,l,r);
      pushUp(p);
  }

  int query(Node p,int l,int r){
      if(l <= p.l && r >= p.r){
          return p.maxRepeat;
      }
      pushDown(p);
      int mid = p.l + p.r>>1;
      int max = 0;
      if(mid >= l) max = Math.max(max,query(p.left,l,r));
      if(mid < r) max = Math.max(max,query(p.right,l,r));
      return max;
  }

  Node root;
  public MyCalendarThree() {
      root = new Node(0,N);
  }
  
  public int book(int start, int end) {
      /* 1
      int cnt = query(root,start,end-1);
      if(cnt >= 1){
          return false;
      }
      update(root,start,end-1);
      return true;
      */

      /** 2
      int cnt = query(root,start,end-1);
      if(cnt >= 2){
          return false;
      }
      update(root,start,end-1);
      return true;
       */
      
      // 3
      update(root,start,end-1);
      return root.maxRepeat;
  }
}