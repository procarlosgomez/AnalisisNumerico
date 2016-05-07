/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaapplication3;

import java.io.IOException;

/**
 *
 * @author Lizbet
 */
public class JavaApplication3 {
    
    
    

    /**
     * @param args the command line arguments
     * @throws java.io.IOException
     */
    public static void main(String[] args) throws IOException {
        // TODO code application logic here
        int n = System.in.read();
        
        double entradas[][] = new double[n][n+1];
        for(int i = 0; i<n; i++){
            for(int j=0;i<n+1;j++){
                entradas[i][j] = (double) System.in.read();
            }
        }
        
        double tol = (double) System.in.read();
        double error = tol+1;
        
        double x = 0, y = 0;
        double xk[] = new double[99999];
        xk[0] = 0;
        int k = 0;
        while(error > tol){
           // double xAnt = x, yAnt = y;
            
            for(int i = 0; i<n ; i++){
                double bk = entradas[i][n+1];
                
                double sum=0;
                for(int j = 0; j<n; j++){
                    sum += entradas[i][j];
                }
                
                xk[k] = bk - sum;
                
            }
            k++;
        }
    }
    
}
