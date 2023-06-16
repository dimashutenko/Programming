#include <stdio.h>
#include <stdint.h>
#include <stdlib.h>
#include <string.h>

typedef uint8_t BYTE;

const int BLOCK_SIZE = 512;

int main(int argc, char *argv[])
{
    if (argc != 2)
    {
        printf("Usage: ./recover IMAGE\n");
        return 1;
    }

    char *input_file = argv[1];
    FILE *file = fopen(input_file, "r");

    if (file == NULL)
    {
        printf("Unable to open file %s\n", input_file);
        return 1;
    }

    char filemame[8];  // xxx.jpg'/0'
    FILE *img = NULL;
    BYTE buffer[BLOCK_SIZE];
    int number_of_files = 0;


    while (fread(buffer, sizeof(BYTE), BLOCK_SIZE, file) || feof(file) == 0)
    {
        if (buffer[0] == 0xff && buffer[1] == 0xd8 && buffer[2] == 0xff && (buffer[3] & 0xf0) == 0xe0)
        {
            if (img != NULL) // for first OK, every other needs to be closed
            {
                fclose(img);
            }

            sprintf(filemame, "%03i.jpg", number_of_files); // create name for an image file
            img = fopen(filemame, "w"); // open file to write into
            number_of_files++;
        }

        if (img != NULL) // checking if the output has been used before
        {
            fwrite(buffer, sizeof(buffer), 1, img);
        }


    }

    if (file != NULL)
    {
        fclose(file);
    }

    if (img != NULL)
    {
        fclose(img);
    }

}