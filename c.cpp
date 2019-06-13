
#include <iostream>

using namespace std;

double vals[] = {10.1, 12.6, 33.1, 24.1, 50.0};

double &setValues(int i)
{
  return vals[i]; // 返回第 i 个元素的引用
}

// 要调用上面定义函数的主函数
int main()
{

  cout << "改变前的值" << endl;
  for (int i = 0; i < 5; i++)
  {
    cout << "vals[" << i << "] = ";
    cout << vals[i] << endl;
  }
  //  double vals[] = {10.1, 12.6, 33.1, 24.1, 50.0};
  vals[1] = 20.2;      // 改变第 2 个元素
  setValues(3) = 70.8; // 改变第 4 个元素

  cout << "改变后的值" << endl;
  for (int i = 0; i < 5; i++)
  {
    cout << "vals[" << i << "] = ";
    cout << vals[i] << endl;
  }
  return 0;
}
#include <iostream> 
using namespace std;
 
class Shape {
   protected:
      int width, height;
   public:
      Shape( int a=0, int b=0)
      {
         width = a;
         height = b;
      }
      int area()
      {
         cout << "Parent class area :" <<endl;
         return 0;
      }
};
class Rectangle: public Shape{
   public:
      Rectangle( int a=0, int b=0):Shape(a, b) { }
      int area ()
      { 
         cout << "Rectangle class area :" <<endl;
         return (width * height); 
      }
};
class Triangle: public Shape{
   public:
      Triangle( int a=0, int b=0):Shape(a, b) { }
      int area ()
      { 
         cout << "Triangle class area :" <<endl;
         return (width * height / 2); 
      }
};
// 程序的主函数
int main( )
{
   Shape *shape;
   Rectangle rec(10,7);
   Triangle  tri(10,5);
 
   // 存储矩形的地址
   shape = &rec;
   // 调用矩形的求面积函数 area
   shape->area();
 
   // 存储三角形的地址
   shape = &tri;
   // 调用三角形的求面积函数 area
   shape->area();
   
   return 0;
}