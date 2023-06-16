#include "helpers.h"
#include <string.h>
#include <math.h>

int compare(double a, int b);

// Convert image to grayscale
void grayscale(int height, int width, RGBTRIPLE image[height][width])
{
    for (int i = 0 ; i < height ; i++)
    {
        for (int j = 0 ; j < width ; j++)
        {
            BYTE rgbtRed = image[i][j].rgbtRed;
            BYTE rgbtGreen = image[i][j].rgbtGreen;
            BYTE rgbtBlue = image[i][j].rgbtBlue;

            BYTE average = (int) round((rgbtRed + rgbtGreen + rgbtBlue) / 3.0);

            image[i][j].rgbtRed = average;
            image[i][j].rgbtGreen = average;
            image[i][j].rgbtBlue = average;
        }
    }
    return;
}

// Convert image to sepia
void sepia(int height, int width, RGBTRIPLE image[height][width])
{
    for (int i = 0 ; i < height ; i++)
    {
        for (int j = 0 ; j < width ; j++)
        {
            BYTE originalRed = image[i][j].rgbtRed;
            BYTE originalGreen = image[i][j].rgbtGreen;
            BYTE originalBlue = image[i][j].rgbtBlue;

            double newRed = .393 * originalRed + .769 * originalGreen + .189 * originalBlue;
            image[i][j].rgbtRed  = compare(newRed, 255);

            double newGreen = .349 * originalRed + .686 * originalGreen + .168 * originalBlue;
            image[i][j].rgbtGreen = compare(newGreen, 255);

            double newBlue = .272 * originalRed + .534 * originalGreen + .131 * originalBlue;
            image[i][j].rgbtBlue = compare(newBlue, 255);
        }
    }
    return;
}

// Reflect image horizontally
void reflect(int height, int width, RGBTRIPLE image[height][width])
{
    for (int i = 0 ; i < height ; i++)
    {
        for (int j = 0, iterations = width / 2 ; j < iterations ; j++)
        {
            BYTE temp_red = image[i][width - 1 - j].rgbtRed;
            BYTE temp_green = image[i][width - 1 - j].rgbtGreen;
            BYTE temp_blue = image[i][width - 1 - j].rgbtBlue;

            image[i][width - 1 - j].rgbtRed = image[i][j].rgbtRed;
            image[i][width - 1 - j].rgbtGreen = image[i][j].rgbtGreen;
            image[i][width - 1 - j].rgbtBlue = image[i][j].rgbtBlue;

            image[i][j].rgbtRed = temp_red;
            image[i][j].rgbtGreen = temp_green;
            image[i][j].rgbtBlue = temp_blue;
        }
    }
    return;
}

// Blur image
void blur(int height, int width, RGBTRIPLE image[height][width])
{
    RGBTRIPLE copy[height][width];

    // for (int i = 0 ; i < height ; i++)
    // {
    //     for (int j = 0 ; j < width ; j++)
    //     {
    //         copy[i][j] = image[i][j];
    //     }
    // }

    for (int i = 0 ; i < height ; i++)
    {
        for (int j = 0 ; j < width ; j++)
        {
            int sum_red = 0, sum_green = 0, sum_blue = 0;
            double number = 0.0;

            if (i - 1 >= 0) // if not top row
            {
                if (j - 1 >= 0) // if not on left corner
                {
                    sum_red += (int) image[i - 1][j - 1].rgbtRed;

                    sum_green += (int) image[i - 1][j - 1].rgbtGreen;

                    sum_blue += (int) image[i - 1][j - 1].rgbtBlue;

                    number++;
                }

                sum_red += (int) image[i - 1][j].rgbtRed;

                sum_green += (int) image[i - 1][j].rgbtGreen;

                sum_blue += (int) image[i - 1][j].rgbtBlue;

                number++;

                if (j + 1 <= width - 1) // if not on right corner
                {
                    sum_red += (int) image[i - 1][j + 1].rgbtRed;

                    sum_green += (int) image[i - 1][j + 1].rgbtGreen;

                    sum_blue += (int) image[i - 1][j + 1].rgbtBlue;

                    number++;
                }
            }

            if (j - 1 >= 0) // if not on left corner
            {
                sum_red += (int) image[i][j - 1].rgbtRed;

                sum_green += (int) image[i][j - 1].rgbtGreen;

                sum_blue += (int) image[i][j - 1].rgbtBlue;

                number++;
            }

            sum_red += (int) image[i][j].rgbtRed;

            sum_green += (int) image[i][j].rgbtGreen;

            sum_blue += (int) image[i][j].rgbtBlue;

            number++;

            if (j + 1 <= width - 1) // if not on right corner
            {
                sum_red += (int) image[i][j + 1].rgbtRed;

                sum_green += (int) image[i][j + 1].rgbtGreen;

                sum_blue += (int) image[i][j + 1].rgbtBlue;

                number++;
            }

            if (i + 1 <= height - 1) // if not bottom row
            {
                if (j - 1 >= 0) // if not on left corner
                {
                    sum_red += (int) image[i + 1][j - 1].rgbtRed;

                    sum_green += (int) image[i + 1][j - 1].rgbtGreen;

                    sum_blue += (int) image[i + 1][j - 1].rgbtBlue;

                    number++;
                }

                sum_red += (int) image[i + 1][j].rgbtRed;

                sum_green += (int) image[i + 1][j].rgbtGreen;

                sum_blue += (int) image[i + 1][j].rgbtBlue;

                number++;

                if (j + 1 <= width - 1) // if not on right corner
                {
                    sum_red += (int) image[i + 1][j + 1].rgbtRed;

                    sum_green += (int) image[i + 1][j + 1].rgbtGreen;

                    sum_blue += (int) image[i + 1][j + 1].rgbtBlue;

                    number++;
                }
            }

            int average_red = round(sum_red / number);
            int average_green = round(sum_green / number);
            int average_blue = round(sum_blue / number);

            copy[i][j].rgbtRed = average_red;
            copy[i][j].rgbtGreen = average_green;
            copy[i][j].rgbtBlue = average_blue;
        }
    }

    for (int i = 0 ; i < height ; i++)
    {
        for (int j = 0 ; j < width ; j++)
        {
            image[i][j].rgbtRed = copy[i][j].rgbtRed;
            image[i][j].rgbtGreen = copy[i][j].rgbtGreen;
            image[i][j].rgbtBlue = copy[i][j].rgbtBlue;
        }
    }

    return;
}

int compare(double a, int b)
{
    return a > b ? b : (int) round(a);
}