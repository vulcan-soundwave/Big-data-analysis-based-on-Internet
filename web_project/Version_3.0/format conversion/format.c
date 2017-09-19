#include <stdio.h>
#include <stdlib.h>

int main(){

	FILE *fp;
	char arr[400];
	if(fp = fopen("input.in", "r")){
		fgets(arr, 255, fp);
		for(int i=0; i<350; i++){
			printf("%s", arr[i]);
		}
		fclose(fp);
	}

	return 0;
}
