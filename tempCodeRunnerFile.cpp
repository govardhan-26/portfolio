#include<bits/stdc++.h>
using namespace std;

class person{
    public : 
        person()
        {
            cout << "age" << endl;
        }   
        void f(){
            cout << "base" << endl;
        }
};

class yesh : public person
{
    public :
        yesh()
        {
            cout << "Yesh" << endl;
        }   

    void f(){
        cout << "derived" << endl;
    }


};

int fun(int *a)
{
    *a = 10;
    return *a;
}

int main(){
    int a = 5;
    int* b = &a;
    int c = fun(b);
    cout << c << endl;
}


