package com.croissancehub.muna.process;

/**
 * RunScheduler
 */
public class RunScheduler {

    public static void main(String[] args) {
       System.out.println("TEST");
        Scheduler scheduler =new Scheduler();
        scheduler.runTaskCronJob();
    }
}